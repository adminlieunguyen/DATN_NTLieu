using DAL;
using Microsoft.IdentityModel.Tokens;
using Model;
using System;
using Helper;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using DAL.Interfaces;

namespace BLL
{
    public partial class DiemBusiness : IDiemBusiness
    {
        private IDiemRepository _res;
        private string Secret;
        public DiemBusiness(IDiemRepository res, IConfiguration configuration)
        {
            Secret = configuration["AppSettings:Secret"];
            _res = res;
        }


        public TbDiem GetDiembyID(string MaDiem)
        {
            return _res.GetDiembyID(MaDiem);
        }
        public bool DiemCreate(TbDiem model)
        {
            return _res.DiemCreate(model);
        }

        public bool DiemUpdate(TbDiem model)
        {
            return _res.DiemUpdate(model);
        }
        public bool DiemDelete(string MaDiem)
        {
            return _res.DiemDelete(MaDiem);
        }
       /* public bool Diemtbc(string masv)
        {
            return _res.Diemtbc(masv);
        }*/

        public List<TbDiem> DiemSearch(int pageIndex, int pageSize, out long total, string Masv)
        {
            return _res.DiemSearch(pageIndex, pageSize, out total, Masv);
        }
    }
}
