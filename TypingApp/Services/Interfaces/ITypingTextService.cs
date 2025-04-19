using TypingApp.Models.DTO;

namespace TypingApp.Services.Interfaces
{
    public interface ITypingTextService
    {
        Task<IEnumerable<TypingTextDto>> GetAllTextAsync();
        Task<TypingTextDto> GetTextByIdAsync(int id);
        Task AddTextAsync(TypingTextDto textDto);
    }
}
