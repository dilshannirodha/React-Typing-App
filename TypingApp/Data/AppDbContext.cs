using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using TypingApp.Models.Domain;

namespace TypingApp.Data
{
    public class AppDbContext : DbContext
    {
        
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<TypingText> TypingTexts { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Optional: Fluent API configurations (if needed)
            modelBuilder.Entity<User>()
                .HasKey(u => u.UserId);

            modelBuilder.Entity<TypingText>()
                .HasKey(t => t.Id);
        }

    }
}
