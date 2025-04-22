using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TypingApp.Models.DTO.Request;
using TypingApp.Services.Interfaces;

namespace TypingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TextController : ControllerBase
    {
        private readonly ITextService _textService;
        public TextController(ITextService textService)
        {
            _textService = textService;
        }

        [HttpPost]
        [Route("save")]
        public async Task<IActionResult> save([FromBody] SaveTextDto saveTextDto)
        {
            await _textService.SaveAsync(saveTextDto);
            return Ok(new { message = "Saved successfully" });
        }

        [HttpGet]
        [Route("user-texts/{email}")]
        public async Task<IActionResult> getAll(string email)
        {
            if (string.IsNullOrEmpty(email))
            {
                return BadRequest("Email is required.");
            }

            try
            {
                var texts = await _textService.GetTextsByEmailAsync(email);
                return Ok(texts); 
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while fetching the texts.");
            }

        }
    }
}
