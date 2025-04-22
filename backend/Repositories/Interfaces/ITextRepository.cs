using TypingApp.Models.Domain;
using TypingApp.Models.DTO.Request;

namespace TypingApp.Repositories.Interfaces
{
    public interface ITextRepository 
    {
        Task<List<Text>> GetTextsByEmailAsync(string email);
        Task TextSaveAsync(SaveTextDto saveTextDto);
      
    }
}
