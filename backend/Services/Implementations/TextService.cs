using AutoMapper;
using Microsoft.EntityFrameworkCore;
using TypingApp.Data;
using TypingApp.Models.Domain;
using TypingApp.Models.DTO.Request;
using TypingApp.Models.DTO.Response;
using TypingApp.Repositories.Implementations;
using TypingApp.Repositories.Interfaces;
using TypingApp.Services.Interfaces;

namespace TypingApp.Services.Implementations
{
    public class TextService : ITextService
    {
        private readonly ITextRepository _textRepository;
        private readonly IMapper _mapper;

        public TextService(ITextRepository textRepository, IMapper mapper)
        {
            _textRepository = textRepository;
            _mapper = mapper;
        }

        public async Task<List<TextResponseDto>> GetTextsByEmailAsync(string email)
        {
      
            var texts = await _textRepository.GetTextsByEmailAsync(email);

            var textResponseDtos = _mapper.Map<List<TextResponseDto>>(texts);

            return textResponseDtos;
        }
        

        public async Task SaveAsync(SaveTextDto saveTextDto)
        {
            await _textRepository.TextSaveAsync(saveTextDto);
        }
    }
}
