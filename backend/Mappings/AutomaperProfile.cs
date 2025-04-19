using AutoMapper;
using TypingApp.Models.Domain;
using TypingApp.Models.DTO;

namespace TypingApp.Mappings
{
    public class AutomaperProfile : Profile
    {
        public AutomaperProfile() 
        {
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<TypingText, TypingTextDto>().ReverseMap();
        }
    }
}
