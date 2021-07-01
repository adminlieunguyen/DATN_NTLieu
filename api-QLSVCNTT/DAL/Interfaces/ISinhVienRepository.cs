using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public interface ISinhVienRepository
    {
        TbSinhVien GetSVbyID(string MaSinhVien);
        TbSinhVien GetSVbykqht(string id);
        TbSinhVien GetSVDiemtb(string id);
        List<TbSinhVien> Listkqht(string id);
        List<TbSinhVien> Listsvxs(string id);
        bool SVCreate(TbSinhVien model);
        bool SVUpdate(TbSinhVien model);
        bool SVDelete(string id);
        List<TbSinhVien> SVSearch(int pageIndex, int pageSize, out long total, string TenSinhVien,string SoDienThoai);
    }
}
