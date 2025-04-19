using TypingApp.Models.Domain;

namespace TypingApp.Repositories.Interfaces
{
    public interface ITypingTextRepository
    {
        Task<IEnumerable<TypingText>> GetAllTextAsync();
        Task<TypingText> GetTextByIdAsync(int id);
        Task AddTextAsync(TypingText text);

    }
}
