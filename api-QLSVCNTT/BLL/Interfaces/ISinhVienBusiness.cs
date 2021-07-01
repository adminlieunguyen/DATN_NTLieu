using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
    public partial interface ISinhVienBusiness
    {
        TbSinhVien GetSVbyID(string MaSinhVien);
        TbSinhVien GetSVbykqht(string id);
        TbSinhVien GetSVDiemtb(string id);
        List<TbSinhVien> Listsvxs(string id);
        List<TbSinhVien> Listkqht(string id);

        bool Create(TbSinhVien model);
        bool Update(TbSinhVien model);
        bool Delete(string id);
        List<TbSinhVien> Search(int pageIndex, int pageSize, out long total, string TenSinhVien, string SoDienThoai);

    }
}
