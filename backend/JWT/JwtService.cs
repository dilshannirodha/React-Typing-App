using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace TypingApp.JWT
{
    public class JwtService
    {
        private readonly JwtSettings _settings;
        private readonly SymmetricSecurityKey _key;

        public JwtService(IOptions<JwtSettings> options)
        {
            _settings = options.Value;
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_settings.Key));
        }

        public string GenerateToken(string userId, string username)
        {
            var claims = new[]
            {
            new Claim(JwtRegisteredClaimNames.Sub, userId),
            new Claim(JwtRegisteredClaimNames.UniqueName, username),
        };

            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _settings.Issuer,
                audience: _settings.Audience,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(_settings.DurationInMinutes),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
