using TypingApp.Models.Domain;

namespace TypingApp.Repositories.Interfaces
{
    public interface IAuthRepository
    {
         Task CreateUserAsync(User user);
        Task<User?> GetUserByEmailAsync(string email);

    }
}
