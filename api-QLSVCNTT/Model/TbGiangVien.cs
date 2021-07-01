using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public partial class TbGiangVien
    {
        public TbGiangVien()
        {
            TbLop = new HashSet<TbLop>();
        }

        public string MaGiangVien { get; set; }
        public string TenGiangVien { get; set; }
        public string NgaySinh { get; set; }
        public string GioiTinh { get; set; }
        public string SoDienThoai { get; set; }
        public string Email { get; set; }
        public string ChucVu { get; set; }
        public string HocHamHocVi { get; set; }
        public string HinhAnh { get; set; }
        public string GV_MaChuyenNganh { get; set; }
        public string Matkhau { get; set; }
        public string Quyen { get; set; }

        public virtual TbChuyenNganh GvMaChuyenNganhNavigation { get; set; }
        public virtual ICollection<TbLop> TbLop { get; set; }
    }
}
