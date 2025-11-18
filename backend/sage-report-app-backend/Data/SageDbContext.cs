using Microsoft.EntityFrameworkCore;
using sage_report_app_backend.Models;

namespace sage_report_app_backend.Data
{
    public class SageDbContext : DbContext
    {
        public SageDbContext(DbContextOptions<SageDbContext> options) : base(options)
        {
        }

        public DbSet<Apobs> Apobs { get; set; }
        public DbSet<Apven> Apven { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Apobs>()
                .Property(a => a.AmountPaid)
                .HasColumnType("decimal(19, 3)"); // Specify precision and scale for decimal

            modelBuilder.Entity<Apobs>()
                            .Property(a => a.DueDate)
                            .HasColumnType("decimal(9, 0)");
            modelBuilder.Entity<Apobs>()
                            .Property(a => a.InvoiceDate)
                            .HasColumnType("decimal(9, 0)");
            modelBuilder.Entity<Apobs>().HasNoKey(); // Configure Apobs as a keyless entity
            // If there are complex relationships or composite keys, they would be configured here.
        }
    }
}
