using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TypingApp.Models.DTO;
using TypingApp.Services.Interfaces;

namespace TypingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers() => Ok(await _service.GetAllUserAsync());

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserDto dto)
        {
            await _service.AddUserAsync(dto);
            return Ok("User added successfully");
        }
    }
}
