namespace sage_report_app_backend.Dtos
{
    public class ApSummaryDto
    {
        public string Id { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Value { get; set; } = string.Empty;
        public string Percentage { get; set; } = string.Empty;
        public string PercentageColor { get; set; } = string.Empty;
        public string Icon { get; set; } = string.Empty; // Name of the icon
        public string IconColor { get; set; } = string.Empty;
    }
}
