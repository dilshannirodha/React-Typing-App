using AutoMapper;
using TypingApp.Models.Domain;
using TypingApp.Models.DTO;
using TypingApp.Repositories.Interfaces;
using TypingApp.Services.Interfaces;

namespace TypingApp.Services.Implementations
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;
        private readonly IMapper _mapper;

        public UserService(IUserRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<UserDto>> GetAllUserAsync() =>
            _mapper.Map<IEnumerable<UserDto>>(await _repository.GetAllUserAsync());

        public async Task<UserDto> GetUserByIdAsync(int id) =>
            _mapper.Map<UserDto>(await _repository.GetUserByIdAsync(id));

        public async Task AddUserAsync(UserDto userDto)
        {
            var user = _mapper.Map<User>(userDto);
            await _repository.AddUserAsync(user);
        }
    }
}
