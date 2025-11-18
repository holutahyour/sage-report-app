using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace sage_report_app_backend.Models
{
    [Table("APVEN")] // Assuming the table name in Sage 300 is APVEN
    public class Apven
    {
        [Key]
        [Column("VENDORID")] // Assuming VENDORID is the primary key
        public string VendorId { get; set; } = string.Empty;

        [Column("VENDNAME")]
        public string VendorName { get; set; } = string.Empty;

        // Add other relevant columns from APVEN as needed for vendor details
        // For example, if there's a status, net terms, etc.
    }
}
