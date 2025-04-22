using AutoMapper;
using Microsoft.EntityFrameworkCore;
using TypingApp.Data;
using TypingApp.Models.Domain;
using TypingApp.Models.DTO.Request;
using TypingApp.Repositories.Interfaces;

namespace TypingApp.Repositories.Implementations
{
    public class TextRepository : ITextRepository
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public TextRepository(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<Text>> GetTextsByEmailAsync(string email)
        {
            return await _context.Texts
                .Where(t => t.User.Email == email)
                .ToListAsync();
        }

        public async Task TextSaveAsync(SaveTextDto saveTextDto)
        {
            // 1. Get the user by email
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == saveTextDto.Email);
            if (user == null)
            {
                throw new Exception("User not found.");
            }

            // 2. Create the Text object
            var newText = new Text
            {
                TextName = saveTextDto.TextName,
                TextData = saveTextDto.TextData,
                UserId = user.UserId
            };

            // 3. Save to DB
            _context.Texts.Add(newText);
            await _context.SaveChangesAsync();
        }

    
    }
}
