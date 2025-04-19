using Microsoft.EntityFrameworkCore;
using TypingApp.Data;
using TypingApp.Models.Domain;
using TypingApp.Repositories.Interfaces;

namespace TypingApp.Repositories.Implementations
{
    public class TypingTextRepository : ITypingTextRepository
    {
        private readonly AppDbContext _context;

        public TypingTextRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TypingText>> GetAllTextAsync() => await _context.TypingTexts.ToListAsync();

        public async Task<TypingText> GetTextByIdAsync(int id) => await _context.TypingTexts.FindAsync(id);

        public async Task AddTextAsync(TypingText text)
        {
            _context.TypingTexts.Add(text);
            await _context.SaveChangesAsync();
        }
    }
}
