using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using TypingApp.Models.Domain;

namespace TypingApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Text> Texts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Keys
            modelBuilder.Entity<User>()
                .HasKey(u => u.UserId);

            modelBuilder.Entity<Text>()
                .HasKey(t => t.TextName);

            // One-to-many relationship between User and Text
            modelBuilder.Entity<Text>()
                .HasOne(t => t.User)
                .WithMany(u => u.Texts)
                .HasForeignKey(t => t.UserId);
        }
    }
}
