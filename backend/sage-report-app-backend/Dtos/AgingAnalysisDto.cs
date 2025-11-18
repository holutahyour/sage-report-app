namespace sage_report_app_backend.Dtos
{
    public class AgingAnalysisDto
    {
        public string Period { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public string Color { get; set; } = string.Empty;
    }
}
