using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public partial class TbLop
    {
        public TbLop()
        { 
            TbSinhVien = new HashSet<TbSinhVien>();
        }

        public int MaLop { get; set; }
        public string TenLop { get; set; }
        public int SiSo { get; set; }
        public int? MaGVCN { get; set; }
        public string L_HK { get; set; }
        public string L_MaChuyenNganh { get; set; }
        public string HeDaoTao { get; set; }
        public string L_KH { get; set; }
        public string TenChuyenNganh { get; set; }
        public string TenBoMon { get; set; }
        public string TenKhoaHoc { get; set; }

        public virtual TbChuyenNganh LMaChuyenNganhNavigation { get; set; }
        public virtual TbGiangVien MaGvcnNavigation { get; set; }
        public virtual ICollection<TbSinhVien> TbSinhVien { get; set; }
        public virtual ICollection<TbTkb> TbTkb { get; set; }
    }
}
