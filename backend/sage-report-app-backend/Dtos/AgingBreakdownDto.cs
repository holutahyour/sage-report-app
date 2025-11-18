namespace sage_report_app_backend.Dtos
{
    public class AgingBreakdownDto
    {
        public string Period { get; set; } = string.Empty;
        public int Invoices { get; set; }
        public string Amount { get; set; } = string.Empty;
        public string Percentage { get; set; } = string.Empty;
    }
}
