using AutoMapper;
using TypingApp.Models.Domain;
using TypingApp.Models.DTO;
using TypingApp.Models.DTO.Request;
using TypingApp.Models.DTO.Response;

namespace TypingApp.Mappings
{
    public class AutomaperProfile : Profile
    {
        public AutomaperProfile() 
        {
            CreateMap<UserSaveDto, User>();
            CreateMap<User, UserSaveDto>();
            CreateMap<Text, TextResponseDto>();


        }
    }
}
