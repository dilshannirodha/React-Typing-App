﻿using System.ComponentModel.DataAnnotations;

namespace TypingApp.Models.Domain
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        // Navigation property - one user has many texts
        public ICollection<Text> Texts { get; set; }
    }
}
