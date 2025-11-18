using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace sage_report_app_backend.Models
{
    [Table("APOBS")] // Assuming the table name in Sage 300 is APOBS
    public class Apobs
    {
        //[Key]
        //public int Id { get; set; } // Placeholder for a primary key, adjust as per actual table schema

        [Column("AMTPYMRMTC")]
        public decimal AmountPaid { get; set; }

        [Column("IDGRP")]
        public string GroupId { get; set; } = string.Empty;

        [Column("DATEDUE")]
        public decimal DueDate { get; set; }

        [Column("DATEINVC")]
        public decimal InvoiceDate { get; set; }

        // Helper method to convert decimal date (YYYYMMDD) to DateTime
        [NotMapped] // This property is not mapped to a database column
        public DateTime ConvertedDueDate
        {
            get
            {
                if (decimal.TryParse(DueDate.ToString(), out decimal dateDecimal) && dateDecimal > 0)
                {
                    if (DateTime.TryParseExact(dateDecimal.ToString(), "yyyyMMdd", System.Globalization.CultureInfo.InvariantCulture, System.Globalization.DateTimeStyles.None, out DateTime date))
                    {
                        return date;
                    }
                }
                return DateTime.MinValue; // Return a default invalid date or handle error
            }
        }

        [NotMapped] // This property is not mapped to a database column
        public DateTime ConvertedInvoiceDate
        {
            get
            {
                if (decimal.TryParse(InvoiceDate.ToString(), out decimal dateDecimal) && dateDecimal > 0)
                {
                    if (DateTime.TryParseExact(dateDecimal.ToString(), "yyyyMMdd", System.Globalization.CultureInfo.InvariantCulture, System.Globalization.DateTimeStyles.None, out DateTime date))
                    {
                        return date;
                    }
                }
                return DateTime.MinValue; // Return a default invalid date or handle error
            }
        }

        // Add other relevant columns from APOBS as needed
    }
}
