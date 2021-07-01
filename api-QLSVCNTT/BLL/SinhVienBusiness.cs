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

namespace BLL
{
    public partial class SinhVienBusiness : ISinhVienBusiness
    {
        private ISinhVienRepository _res;
        private string Secret;
        public SinhVienBusiness(ISinhVienRepository res, IConfiguration configuration)
        {
            Secret = configuration["AppSettings:Secret"];
            _res = res;
        }

        public TbSinhVien GetSVbyID(string MaSinhVien)
        {
            return _res.GetSVbyID(MaSinhVien);
        }

        public bool Create(TbSinhVien model)
        {
            return _res.SVCreate(model);
        }

        public bool Update(TbSinhVien model)
        {
            return _res.SVUpdate(model);
        }
        public bool Delete(string MaSinhVien)
        {
            return _res.SVDelete(MaSinhVien);
        }
        public TbSinhVien GetSVbykqht(string MaSinhVien)
        {
            return _res.GetSVbykqht(MaSinhVien);
        }
        public List<TbSinhVien> Listkqht(string id)
        {
            return _res.Listkqht(id);
        }
        public List<TbSinhVien> Search(int pageIndex, int pageSize, out long total, string TenSinhVien, string SoDienThoai)
        {
            return _res.SVSearch(pageIndex, pageSize, out total, TenSinhVien,  SoDienThoai);
        }

        public TbSinhVien GetSVDiemtb(string id)
        {
            return _res.GetSVDiemtb(id);
        }

        public List<TbSinhVien> Listsvxs(string id)
        {
            return _res.Listkqht(id);
        }
    }
}
