namespace sage_report_app_backend.Dtos
{
    public class VendorDetailsDto
    {
        public string Name { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public int Rank { get; set; }
        public string NetTerms { get; set; } = string.Empty;
        public string LastPaymentDate { get; set; } = string.Empty;
        public decimal TotalOutstanding { get; set; }
        public int OutstandingPercentage { get; set; }
        public decimal ThisMonthAmount { get; set; }
        public int InvoicesCount { get; set; }
        public int AvgDays { get; set; }
        public string Phone { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
    }
}
