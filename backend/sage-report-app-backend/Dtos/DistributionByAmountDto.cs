namespace sage_report_app_backend.Dtos
{
    public class DistributionByAmountDto
    {
        public string Name { get; set; } = string.Empty;
        public decimal Value { get; set; }
        public string Color { get; set; } = string.Empty;
    }
}
