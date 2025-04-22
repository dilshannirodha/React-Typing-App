using TypingApp.Models.DTO.Request;
using TypingApp.Models.DTO.Response;

namespace TypingApp.Services.Interfaces
{
    public interface ITextService
    {
        Task<List<TextResponseDto>> GetTextsByEmailAsync(string email);
        Task SaveAsync(SaveTextDto saveTextDto);
    }
}
