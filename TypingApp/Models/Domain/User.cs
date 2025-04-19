namespace TypingApp.Models.Domain
{
    public class User
    {
        public int UserId { get; set; }
        public String UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int MaxWpm { get; set; } 
    }
}
