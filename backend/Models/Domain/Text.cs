using System.ComponentModel.DataAnnotations;

namespace TypingApp.Models.Domain
{
    public class Text
    {
        [Key]
        public string TextName { get; set; }  // unique name for the text

        public string TextData { get; set; }

        // Foreign Key to User
        public int UserId { get; set; }

        // Navigation property
        public User User { get; set; }
    }
}
