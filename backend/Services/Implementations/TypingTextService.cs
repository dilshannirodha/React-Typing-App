using AutoMapper;
using TypingApp.Models.Domain;
using TypingApp.Models.DTO;
using TypingApp.Repositories.Interfaces;
using TypingApp.Services.Interfaces;

namespace TypingApp.Services.Implementations
{
    public class TypingTextService : ITypingTextService
    {
        private readonly ITypingTextRepository _repository;
        private readonly IMapper _mapper;

        public TypingTextService(ITypingTextRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<TypingTextDto>> GetAllTextAsync() =>
            _mapper.Map<IEnumerable<TypingTextDto>>(await _repository.GetAllTextAsync());

        public async Task<TypingTextDto> GetTextByIdAsync(int id) =>
            _mapper.Map<TypingTextDto>(await _repository.GetTextByIdAsync(id));

        public async Task AddTextAsync(TypingTextDto textDto)
        {
            var text = _mapper.Map<TypingText>(textDto);
            await _repository.AddTextAsync(text);
        }
    }
}
