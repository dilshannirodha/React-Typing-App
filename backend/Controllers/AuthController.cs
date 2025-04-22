using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TypingApp.Models.DTO.Request;
using TypingApp.Services.Interfaces;

namespace TypingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly IAuthService _authService;

        public AuthController( IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> CreateUser([FromBody] UserSaveDto userSaveDto)
        {
            await _authService.AddUserAsync(userSaveDto);
            return Ok(new { message = "User added successfully" });
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
           var authResult =  await _authService.GetUser(loginDto);
            return Ok(authResult);
        }
    }
}
