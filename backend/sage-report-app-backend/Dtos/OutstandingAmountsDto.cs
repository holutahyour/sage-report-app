namespace sage_report_app_backend.Dtos
{
    public class OutstandingAmountsDto
    {
        public string Name { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public string Color { get; set; } = string.Empty;
    }
}
