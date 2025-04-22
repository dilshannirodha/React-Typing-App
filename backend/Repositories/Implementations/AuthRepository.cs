using Microsoft.EntityFrameworkCore;
using TypingApp.Data;
using TypingApp.Models.Domain;
using TypingApp.Repositories.Interfaces;

namespace TypingApp.Repositories.Implementations
{
    public class AuthRepository : IAuthRepository
    {

        private readonly AppDbContext _context;
        public AuthRepository(AppDbContext context)
        {
            _context = context;
        }


        public async Task CreateUserAsync(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
        }

        public async Task<User?> GetUserByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }
    }
}
