using AutoMapper;
using TypingApp.Models.Domain;
using TypingApp.Models.DTO.Request;
using TypingApp.Models.DTO.Response;
using TypingApp.Repositories.Interfaces;
using TypingApp.Services.Interfaces;
using BCrypt.Net;
using TypingApp.JWT;

namespace TypingApp.Services.Implementations
{
    public class AuthService : IAuthService
    {
        private readonly IAuthRepository _authRepository;
        private readonly IMapper _mapper;
        private readonly JwtService _jwtService;

        public AuthService(IAuthRepository authRepository, IMapper mapper, JwtService jwtService)
        {
            _authRepository = authRepository;
            _mapper = mapper;
            _jwtService = jwtService;
        }

        public async Task AddUserAsync(UserSaveDto userSaveDto)
        {
            var user = _mapper.Map<User>(userSaveDto);
            user.Password = BCrypt.Net.BCrypt.HashPassword(userSaveDto.Password);
            await _authRepository.CreateUserAsync(user);
        }

        public async Task<AuthResponseDto> GetUser(LoginDto loginDto)
        {
            var user = await _authRepository.GetUserByEmailAsync(loginDto.Email);

            if (user == null || !BCrypt.Net.BCrypt.Verify(loginDto.Password, user.Password))
            {
                throw new UnauthorizedAccessException("Invalid email or password");
            }

            var token = _jwtService.GenerateToken(user.UserId.ToString(), user.UserName);

            return new AuthResponseDto
            {
                Username = user.UserName,
                Email = user.Email,
                Token = token
            };
        }
    }
}
