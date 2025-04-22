using TypingApp.Models.DTO.Request;
using TypingApp.Models.DTO.Response;

namespace TypingApp.Services.Interfaces
{
    public interface IAuthService
    {
        Task AddUserAsync(UserSaveDto userSaveDto);
        Task<AuthResponseDto> GetUser(LoginDto loginDto);

    }
}
