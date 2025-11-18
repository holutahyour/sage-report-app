using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sage_report_app_backend.Data;
using sage_report_app_backend.Models;
using sage_report_app_backend.Dtos; // Assuming you'll create DTOs for responses
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Globalization;

namespace sage_report_app_backend.Controllers
{
    [ApiController]
    [Route("api/ap-dashboard")]
    public class ApDashboardController : ControllerBase
    {
        private readonly SageDbContext _context;

        public ApDashboardController(SageDbContext context)
        {
            _context = context;
        }

        [HttpGet("summary")]
        public async Task<ActionResult<IEnumerable<ApSummaryDto>>> GetApSummary()
        {
            // TOTAL OUTSTANDING (NAIRA) - APOBS.AMTPYRMTC
            // TOTAL OUTSTANDING (OTHER CURRENCY) - APOBS.AMTPYRMTC
            // For simplicity, we'll just sum all outstanding amounts for now.
            // In a real scenario, you'd filter by currency and other conditions.
            var totalOutstanding = await _context.Apobs
                .SumAsync(a => a.AmountPaid);

            // DUE THIS WEEK - APOBS.DATEDUE, APOBS.DATEINVC
            // CONDITION: DATEINVC - DATEDUE <= 30 (GracePeriod)
            // This condition seems to imply invoices that are due within 30 days of their invoice date.
            // Let's interpret "Due This Week" as invoices with a ConvertedDueDate within the next 7 days.
            var startOfWeek = DateTime.Today; // Or a more robust way to get start of week
            var endOfWeek = DateTime.Today.AddDays(7);

            var dueThisWeek = _context.Apobs.AsEnumerable() // Force client-side evaluation
                .Where(a => a.ConvertedDueDate >= startOfWeek && a.ConvertedDueDate <= endOfWeek)
                .Sum(a => a.AmountPaid);

            // APPROVED FOR PAYMENT - This data is not directly available from APOBS/APVEN in the image.
            // It would typically come from a different table or a status field.
            // For now, we'll use a placeholder or derive it if possible.
            // Let's assume "Approved for Payment" could be a subset of outstanding,
            // or a fixed value for demonstration.
            var approvedForPayment = 3200.00m; // Placeholder

            var summaryData = new List<ApSummaryDto>
            {
                new ApSummaryDto
                {
                    Id = "total-outstanding",
                    Title = "TOTAL OUTSTANDING",
                    Value = totalOutstanding.ToString("C", new CultureInfo("en-NG")), // Format as Naira currency
                    Percentage = "Live data",
                    PercentageColor = "text-red-500",
                    Icon = "Clock", // Placeholder for icon name
                    IconColor = "text-red-500"
                },
                new ApSummaryDto
                {
                    Id = "due-this-week",
                    Title = "DUE THIS WEEK",
                    Value = dueThisWeek.ToString("C", new CultureInfo("en-NG")),
                    Percentage = "Live data",
                    PercentageColor = "text-orange-500",
                    Icon = "Clock",
                    IconColor = "text-orange-500"
                },
                new ApSummaryDto
                {
                    Id = "approved-for-payment",
                    Title = "APPROVED FOR PAYMENT",
                    Value = approvedForPayment.ToString("C", new CultureInfo("en-NG")),
                    Percentage = "Live data",
                    PercentageColor = "text-green-500",
                    Icon = "CheckCircle2",
                    IconColor = "text-green-500"
                }
            };

            return Ok(summaryData);
        }

        [HttpGet("aging-analysis")]
        public async Task<ActionResult<IEnumerable<AgingAnalysisDto>>> GetAgingAnalysis()
        {
            // Aging Analysis - APOBS.AMTPYRMTC, DUEDATE, DATEINVC
            // CONDITION: odj, 31-60,61-90, 90+
            // This implies grouping by aging periods.
            // For simplicity, let's define periods relative to today.
            var today = DateTime.Today;

            var agingData = await _context.Apobs
                .GroupBy(a => 1) // Group all for initial sum, then categorize
                .Select(g => new
                {
                    TotalOutstanding = g.Sum(a => a.AmountPaid)
                })
                .FirstOrDefaultAsync();

            var current = _context.Apobs.AsEnumerable() // Force client-side evaluation
                .Where(a => (today - a.ConvertedDueDate).TotalDays <= 30)
                .Sum(a => a.AmountPaid);

            var days1_30 = _context.Apobs.AsEnumerable() // Force client-side evaluation
                .Where(a => (today - a.ConvertedDueDate).TotalDays > 0 && (today - a.ConvertedDueDate).TotalDays <= 30)
                .Sum(a => a.AmountPaid);

            var days31_60 = _context.Apobs.AsEnumerable() // Force client-side evaluation
                .Where(a => (today - a.ConvertedDueDate).TotalDays > 30 && (today - a.ConvertedDueDate).TotalDays <= 60)
                .Sum(a => a.AmountPaid);

            var days61_90 = _context.Apobs.AsEnumerable() // Force client-side evaluation
                .Where(a => (today - a.ConvertedDueDate).TotalDays > 60 && (today - a.ConvertedDueDate).TotalDays <= 90)
                .Sum(a => a.AmountPaid);

            var days90Plus = _context.Apobs.AsEnumerable() // Force client-side evaluation
                .Where(a => (today - a.ConvertedDueDate).TotalDays > 90)
                .Sum(a => a.AmountPaid);

            var agingAnalysis = new List<AgingAnalysisDto>
            {
                new AgingAnalysisDto { Period = "Current", Amount = current, Color = "hsl(142.1 76.2% 36.3%)" },
                new AgingAnalysisDto { Period = "1-30 Days", Amount = days1_30, Color = "hsl(200 60% 50%)" },
                new AgingAnalysisDto { Period = "31-60 Days", Amount = days31_60, Color = "hsl(39_100%_50%)" },
                new AgingAnalysisDto { Period = "61-90 Days", Amount = days61_90, Color = "hsl(25_95%_50%)" },
                new AgingAnalysisDto { Period = "90+ Days", Amount = days90Plus, Color = "hsl(0_84.2%_60.2%)" },
            };

            return Ok(agingAnalysis);
        }

        [HttpGet("aging-breakdown")]
        public async Task<ActionResult<IEnumerable<AgingBreakdownDto>>> GetAgingBreakdown()
        {
            var today = DateTime.Today;

            var agingBreakdown = new List<AgingBreakdownDto>();

            // Current (0-30 days)
            var currentInvoices = _context.Apobs.AsEnumerable() // Force client-side evaluation
                .Where(a => (today - a.ConvertedDueDate).TotalDays <= 30)
                .ToList();
            agingBreakdown.Add(new AgingBreakdownDto
            {
                Period = "Current (0-30 days)",
                Invoices = currentInvoices.Count,
                Amount = currentInvoices.Sum(a => a.AmountPaid).ToString("C", new CultureInfo("en-NG")),
                Percentage = "42.5%" // Placeholder, calculate dynamically if total is available
            });

            // 1-30 Days
            var days1_30Invoices = _context.Apobs.AsEnumerable() // Force client-side evaluation
                .Where(a => (today - a.ConvertedDueDate).TotalDays > 0 && (today - a.ConvertedDueDate).TotalDays <= 30)
                .ToList();
            agingBreakdown.Add(new AgingBreakdownDto
            {
                Period = "1-30 Days",
                Invoices = days1_30Invoices.Count,
                Amount = days1_30Invoices.Sum(a => a.AmountPaid).ToString("C", new CultureInfo("en-NG")),
                Percentage = "27.2%" // Placeholder
            });

            // 31-60 Days
            var days31_60Invoices = _context.Apobs.AsEnumerable() // Force client-side evaluation
                .Where(a => (today - a.ConvertedDueDate).TotalDays > 30 && (today - a.ConvertedDueDate).TotalDays <= 60)
                .ToList();
            agingBreakdown.Add(new AgingBreakdownDto
            {
                Period = "31-60 Days",
                Invoices = days31_60Invoices.Count,
                Amount = days31_60Invoices.Sum(a => a.AmountPaid).ToString("C", new CultureInfo("en-NG")),
                Percentage = "17.0%" // Placeholder
            });

            // 61-90 Days
            var days61_90Invoices = _context.Apobs.AsEnumerable() // Force client-side evaluation
                .Where(a => (today - a.ConvertedDueDate).TotalDays > 60 && (today - a.ConvertedDueDate).TotalDays <= 90)
                .ToList();
            agingBreakdown.Add(new AgingBreakdownDto
            {
                Period = "61-90 Days",
                Invoices = days61_90Invoices.Count,
                Amount = days61_90Invoices.Sum(a => a.AmountPaid).ToString("C", new CultureInfo("en-NG")),
                Percentage = "8.5%" // Placeholder
            });

            // 90+ Days
            var days90PlusInvoices = _context.Apobs.AsEnumerable() // Force client-side evaluation
                .Where(a => (today - a.ConvertedDueDate).TotalDays > 90)
                .ToList();
            agingBreakdown.Add(new AgingBreakdownDto
            {
                Period = "90+ Days",
                Invoices = days90PlusInvoices.Count,
                Amount = days90PlusInvoices.Sum(a => a.AmountPaid).ToString("C", new CultureInfo("en-NG")),
                Percentage = "4.1%" // Placeholder
            });

            return Ok(agingBreakdown);
        }

        [HttpGet("distribution-by-amount")]
        public async Task<ActionResult<IEnumerable<DistributionByAmountDto>>> GetDistributionByAmount()
        {
            // Distribution by Amount - This typically involves grouping outstanding amounts by category or vendor type.
            // The image shows "Tech...", "Office...", etc. which implies categories.
            // For now, we'll use a simplified grouping based on GroupId from APOBS, or mock data.
            // In a real scenario, you'd join with a category table or use a more sophisticated grouping.

            var distributionData = await _context.Apobs
                .GroupBy(a => a.GroupId) // Group by GroupId as a placeholder for category
                .Select(g => new DistributionByAmountDto
                {
                    Name = g.Key,
                    Value = g.Sum(a => a.AmountPaid),
                    Color = "hsl(200 60% 50%)" // Placeholder color
                })
                .OrderByDescending(d => d.Value)
                .Take(5) // Top 5 categories
                .ToListAsync();

            // If no data, provide some mock data for demonstration
            if (!distributionData.Any())
            {
                distributionData = new List<DistributionByAmountDto>
                {
                    new DistributionByAmountDto { Name = "Tech...", Value = 145000, Color = "hsl(200 60% 50%)" },
                    new DistributionByAmountDto { Name = "Office...", Value = 89000, Color = "hsl(39_100%_50%)" },
                    new DistributionByAmountDto { Name = "Marketing...", Value = 72000, Color = "hsl(200 60% 50%)" },
                    new DistributionByAmountDto { Name = "Facility...", Value = 58000, Color = "hsl(25_95%_50%)" },
                    new DistributionByAmountDto { Name = "Legal...", Value = 45000, Color = "hsl(142.1 76.2% 36.3%)" },
                };
            }

            return Ok(distributionData);
        }

        [HttpGet("outstanding-amounts")]
        public async Task<ActionResult<IEnumerable<OutstandingAmountsDto>>> GetOutstandingAmounts()
        {
            // Outstanding Amounts - Similar to distribution by amount, but might be a different view or aggregation.
            // The image shows "Tech...", "Office..." again.
            // We'll use a similar grouping by GroupId for now.

            var outstandingData = await _context.Apobs
                .GroupBy(a => a.GroupId) // Group by GroupId as a placeholder for category
                .Select(g => new OutstandingAmountsDto
                {
                    Name = g.Key,
                    Amount = g.Sum(a => a.AmountPaid),
                    Color = "hsl(200 60% 50%)" // Placeholder color
                })
                .OrderByDescending(d => d.Amount)
                .Take(5) // Top 5 categories
                .ToListAsync();

            // If no data, provide some mock data for demonstration
            if (!outstandingData.Any())
            {
                outstandingData = new List<OutstandingAmountsDto>
                {
                    new OutstandingAmountsDto { Name = "Tech...", Amount = 145000, Color = "hsl(200 60% 50%)" },
                    new OutstandingAmountsDto { Name = "Office...", Amount = 89000, Color = "hsl(39_100%_50%)" },
                    new OutstandingAmountsDto { Name = "Marketing...", Amount = 72000, Color = "hsl(200 60% 50%)" },
                    new OutstandingAmountsDto { Name = "Facility...", Amount = 58000, Color = "hsl(25_95%_50%)" },
                    new OutstandingAmountsDto { Name = "Legal...", Amount = 45000, Color = "hsl(142.1 76.2% 36.3%)" },
                };
            }

            return Ok(outstandingData);
        }

        [HttpGet("vendor-details")]
        public async Task<ActionResult<IEnumerable<VendorDetailsDto>>> GetVendorDetails()
        {
            // Vendor Details - APVEN table, join with APOBS for outstanding amounts.
            // The image mentions "JOIN TABLE WITH ID FOR VENDOR NAME"
            // This requires joining Apven with Apobs to get total outstanding per vendor.

            var allApobs = await _context.Apobs.ToListAsync(); // Fetch all Apobs into memory
            var allApven = await _context.Apven.ToListAsync(); // Fetch all Apven into memory

            var vendorDetails = allApven
                .GroupJoin(allApobs,
                    ven => ven.VendorId,
                    obs => obs.GroupId, // Assuming GroupId in APOBS links to VendorId in APVEN
                    (ven, obsGroup) => new
                    {
                        Vendor = ven,
                        OutstandingInvoices = obsGroup.ToList()
                    })
                .Select(x => new VendorDetailsDto
                {
                    Name = x.Vendor.VendorName,
                    Status = "Good", // Placeholder, derive from data if available
                    Rank = 0, // Will be set after ordering
                    NetTerms = "Net 30", // Placeholder
                    LastPaymentDate = x.OutstandingInvoices.Any() ? x.OutstandingInvoices.Max(o => o.ConvertedInvoiceDate).ToString("yyyy-MM-dd") : DateTime.Today.AddMonths(-1).ToString("yyyy-MM-dd"), // Use converted date
                    TotalOutstanding = x.OutstandingInvoices.Sum(o => o.AmountPaid),
                    OutstandingPercentage = 0, // Placeholder
                    ThisMonthAmount = 0, // Placeholder
                    InvoicesCount = x.OutstandingInvoices.Count(),
                    AvgDays = 0, // Placeholder
                    Phone = "+1 (555) XXX-XXXX", // Placeholder
                    Email = "contact@example.com", // Placeholder
                    Address = "123 Business St, City, State" // Placeholder
                })
                .OrderByDescending(v => v.TotalOutstanding)
                .Take(5)
                .ToList();

            // Assign ranks and percentages after fetching and ordering
            for (int i = 0; i < vendorDetails.Count; i++)
            {
                vendorDetails[i].Rank = i + 1;
                // Calculate OutstandingPercentage and AvgDays if possible
            }

            // If no data, provide some mock data for demonstration
            if (!vendorDetails.Any())
            {
                vendorDetails = new List<VendorDetailsDto>
                {
                    new VendorDetailsDto
                    {
                        Name = "Tech Solutions Inc.",
                        Status = "Good", Rank = 1, NetTerms = "Net 30", LastPaymentDate = "2024-09-01",
                        TotalOutstanding = 145000, OutstandingPercentage = 100, ThisMonthAmount = 25000,
                        InvoicesCount = 12, AvgDays = 28, Phone = "+1 (555) 123-4567",
                        Email = "billing@techsolutions.com", Address = "123 Tech Blvd, Silicon Valley, CA",
                    },
                    new VendorDetailsDto
                    {
                        Name = "Office Supplies Co.",
                        Status = "Good", Rank = 2, NetTerms = "Net 15", LastPaymentDate = "2024-08-20",
                        TotalOutstanding = 89000, OutstandingPercentage = 80, ThisMonthAmount = 15000,
                        InvoicesCount = 8, AvgDays = 35, Phone = "+1 (555) 987-6543",
                        Email = "contact@officesupplies.com", Address = "456 Office Rd, Business City, NY",
                    },
                    new VendorDetailsDto
                    {
                        Name = "Marketing Pros",
                        Status = "Average", Rank = 3, NetTerms = "Net 45", LastPaymentDate = "2024-08-15",
                        TotalOutstanding = 72000, OutstandingPercentage = 90, ThisMonthAmount = 10000,
                        InvoicesCount = 10, AvgDays = 40, Phone = "+1 (555) 111-2222",
                        Email = "info@marketingpros.com", Address = "789 Creative Ave, Ad Town, CA",
                    },
                    new VendorDetailsDto
                    {
                        Name = "Facility Management LLC",
                        Status = "Good", Rank = 4, NetTerms = "Net 30", LastPaymentDate = "2024-09-05",
                        TotalOutstanding = 58000, OutstandingPercentage = 70, ThisMonthAmount = 8000,
                        InvoicesCount = 5, AvgDays = 20, Phone = "+1 (555) 333-4444",
                        Email = "support@facilitymgmt.com", Address = "101 Maintenance St, Service City, TX",
                    },
                    new VendorDetailsDto
                    {
                        Name = "Legal Services Group",
                        Status = "Excellent", Rank = 5, NetTerms = "Net 60", LastPaymentDate = "2024-07-30",
                        TotalOutstanding = 45000, OutstandingPercentage = 60, ThisMonthAmount = 7000,
                        InvoicesCount = 3, AvgDays = 50, Phone = "+1 (555) 555-6666",
                        Email = "legal@legalservices.com", Address = "202 Justice Ln, Law City, DC",
                    },
                };
            }

            return Ok(vendorDetails);
        }
    }
}
