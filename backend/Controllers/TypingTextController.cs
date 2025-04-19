using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TypingApp.Models.DTO;
using TypingApp.Services.Interfaces;

namespace TypingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TypingTextController : ControllerBase
    {
        private readonly ITypingTextService _service;

        public TypingTextController(ITypingTextService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetTexts() => Ok(await _service.GetAllTextAsync());

        [HttpPost]
        public async Task<IActionResult> AddText([FromBody] TypingTextDto dto)
        {
            await _service.AddTextAsync(dto);
            return Ok("Text added successfully");
        }
    }
}
