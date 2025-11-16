"use client"

import DashboardSummary from "@/components/dashboard-summary"
import { SummaryCard, SummaryDataItem } from "@/components/dashboard-summary-cards"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, CheckCircle2, Clock } from "lucide-react"; // Import necessary icons

import { AgingAnalysisChart } from "./aging-analysis-chart"
import { DistributionByAmountChart } from "./distribution-by-amount-chart"
import { OutstandingAmountsChart } from "./outstanding-amounts-chart"
import { VendorDetailsList } from "./vendor-details-list"

export default function ApDashboardPage() {
  const apSummaryData: SummaryDataItem[] = [
    {
      title: "TOTAL OUTSTANDING",
      value: "$34,700.00",
      percentage: "Live data",
      percentageColor: "text-red-500",
      icon: Clock,
      iconColor: "text-red-500",
      id: "total-outstanding",
    },
    {
      title: "DUE THIS WEEK",
      value: "$21,450.00",
      percentage: "Live data",
      percentageColor: "text-orange-500",
      icon: Clock,
      iconColor: "text-orange-500",
      id: "due-this-week",
    },
    {
      title: "APPROVED FOR PAYMENT",
      value: "$3,200.00",
      percentage: "Live data",
      percentageColor: "text-green-500",
      icon: CheckCircle2,
      iconColor: "text-green-500",
      id: "approved-for-payment",
    },
  ]

  const agingAnalysisData = [
    { period: "Current", amount: 125000, color: "hsl(142.1 76.2% 36.3%)" },
    { period: "1-30 Days", amount: 80000, color: "hsl(200 60% 50%)" },
    { period: "31-60 Days", amount: 50000, color: "hsl(39_100%_50%)" },
    { period: "61-90 Days", amount: 25000, color: "hsl(25_95%_50%)" },
    { period: "90+ Days", amount: 12000, color: "hsl(0_84.2%_60.2%)" },
  ]

  const agingBreakdownData = [
    { period: "Current (0-30 days)", invoices: 24, amount: "$125,000", percentage: "42.5%" },
    { period: "1-30 Days", invoices: 15, amount: "$80,000", percentage: "27.2%" },
    { period: "31-60 Days", invoices: 10, amount: "$50,000", percentage: "17.0%" },
    { period: "61-90 Days", invoices: 5, amount: "$25,000", percentage: "8.5%" },
    { period: "90+ Days", invoices: 3, amount: "$12,000", percentage: "4.1%" },
  ]

  const distributionByAmountData = [
    { name: "Tech...", value: 145000, color: "hsl(200 60% 50%)" },
    { name: "Office...", value: 89000, color: "hsl(39_100%_50%)" },
    { name: "Marketing...", value: 72000, color: "hsl(200 60% 50%)" },
    { name: "Facility...", value: 58000, color: "hsl(25_95%_50%)" },
    { name: "Legal...", value: 45000, color: "hsl(142.1 76.2% 36.3%)" },
  ];

  const outstandingAmountsData = [
    { name: "Tech...", amount: 145000, color: "hsl(200 60% 50%)" },
    { name: "Office...", amount: 89000, color: "hsl(39_100%_50%)" },
    { name: "Marketing...", amount: 72000, color: "hsl(200 60% 50%)" },
    { name: "Facility...", amount: 58000, color: "hsl(25_95%_50%)" },
    { name: "Legal...", amount: 45000, color: "hsl(142.1 76.2% 36.3%)" },
  ];

  const vendorDetailsData = [
    {
      name: "Tech Solutions Inc.",
      status: "Good",
      rank: 1,
      netTerms: "Net 30",
      lastPaymentDate: "2024-09-01",
      totalOutstanding: 145000,
      outstandingPercentage: 100,
      thisMonthAmount: 25000,
      invoicesCount: 12,
      avgDays: 28,
      phone: "+1 (555) 123-4567",
      email: "billing@techsolutions.com",
      address: "123 Tech Blvd, Silicon Valley, CA",
    },
    {
      name: "Office Supplies Co.",
      status: "Good",
      rank: 2,
      netTerms: "Net 15",
      lastPaymentDate: "2024-08-20",
      totalOutstanding: 89000,
      outstandingPercentage: 80,
      thisMonthAmount: 15000,
      invoicesCount: 8,
      avgDays: 35,
      phone: "+1 (555) 987-6543",
      email: "contact@officesupplies.com",
      address: "456 Office Rd, Business City, NY",
    },
    {
      name: "Marketing Pros",
      status: "Average",
      rank: 3,
      netTerms: "Net 45",
      lastPaymentDate: "2024-08-15",
      totalOutstanding: 72000,
      outstandingPercentage: 90,
      thisMonthAmount: 10000,
      invoicesCount: 10,
      avgDays: 40,
      phone: "+1 (555) 111-2222",
      email: "info@marketingpros.com",
      address: "789 Creative Ave, Ad Town, CA",
    },
    {
      name: "Facility Management LLC",
      status: "Good",
      rank: 4,
      netTerms: "Net 30",
      lastPaymentDate: "2024-09-05",
      totalOutstanding: 58000,
      outstandingPercentage: 70,
      thisMonthAmount: 8000,
      invoicesCount: 5,
      avgDays: 20,
      phone: "+1 (555) 333-4444",
      email: "support@facilitymgmt.com",
      address: "101 Maintenance St, Service City, TX",
    },
    {
      name: "Legal Services Group",
      status: "Excellent",
      rank: 5,
      netTerms: "Net 60",
      lastPaymentDate: "2024-07-30",
      totalOutstanding: 45000,
      outstandingPercentage: 60,
      thisMonthAmount: 7000,
      invoicesCount: 3,
      avgDays: 50,
      phone: "+1 (555) 555-6666",
      email: "legal@legalservices.com",
      address: "202 Justice Ln, Law City, DC",
    },
  ];
  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">AP Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Main Dashboard Content Area */}
        <div className="grid grid-cols-1 gap-6">
          {/* Summary Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {apSummaryData.map((card, index) => (
              <SummaryCard
                key={index}
                title={card.title}
                value={card.value}
                percentage={card.percentage}
                percentageColor={card.percentageColor}
                icon={card.icon}
                iconColor={card.iconColor}
                className={
                  card.id === "total-outstanding"
                    ? "bg-red-100/50 border-red-200"
                    : card.id === "due-this-week"
                      ? "bg-orange-100/50 border-orange-200"
                      : "bg-green-100/50 border-green-200"
                }
              />
            ))}
          </div>

          {/* Aging Analysis Chart */}
          <Card className="col-span-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-orange-500" />
                <div>
                  <CardTitle className="text-lg font-normal">Aging Analysis</CardTitle>
                  <p className="p-0 text-sm text-muted-foreground">
                    Outstanding payables by aging periods • Total: <span className="font-bold text-orange-500">$292,000</span>
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <Card className="shadow-none"> {/* New Card for the chart */}
                <CardContent className="p-4"> {/* Titleless CardContent for the chart */}
                  <AgingAnalysisChart data={agingAnalysisData} />
                </CardContent>
              </Card>
              {/* Aging Breakdown List - Each item in its own card */}
              <div className="grid grid-cols-1 gap-4 mt-4"> {/* Added mt-4 for spacing */}
                <CardHeader className="">
                  <CardTitle className="text-lg font-semibold">Aging Breakdown</CardTitle>
                </CardHeader>
                {agingBreakdownData.map((item, index) => (
                  <Card  key={index} className="p-4 shadow-none hover:shadow-lg transition-shadow duration-200">
                    <CardContent className="flex items-center justify-between p-0">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md shadow-sm bg-green-100 flex items-center justify-center">
                          <span className="text-green-500 font-bold">$</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.period}</p>
                          <p className="text-xs text-muted-foreground">{item.invoices} invoices</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{item.amount}</p>
                        <p className="text-xs text-muted-foreground">{item.percentage}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {/* Dashboard Summary */}
              <div className="mt-6">
                <DashboardSummary />
              </div>
            </CardContent>
          </Card>

          {/* Top 5 Vendors Section */}
          <div className="col-span-full mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-purple-500" /> {/* Changed icon color for distinction */}
                  <div>
                    <CardTitle className="text-lg font-normal">Top 5 Vendors</CardTitle>
                    <p className="p-0 text-sm text-muted-foreground">
                      Highest outstanding amounts by vendor • Total: <span className="font-bold text-purple-500">$409,000</span>
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Distribution by Amount */}
                  <Card className="shadow-none">
                    <CardHeader>
                      <CardTitle className="text-md font-semibold">Distribution by Amount</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <DistributionByAmountChart data={distributionByAmountData} />
                    </CardContent>
                  </Card>

                  {/* Outstanding Amounts */}
                  <Card className="shadow-none">
                    <CardHeader>
                      <CardTitle className="text-md font-semibold">Outstanding Amounts</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <OutstandingAmountsChart data={outstandingAmountsData} />
                    </CardContent>
                  </Card>
                </div>

                {/* Vendor Details List - Full Width */}
                <Card className="shadow-none">
                  <CardHeader>
                    <CardTitle className="text-md font-semibold">Vendor Details</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <VendorDetailsList data={vendorDetailsData} />
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
