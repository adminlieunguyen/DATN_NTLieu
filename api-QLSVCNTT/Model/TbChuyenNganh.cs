using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public partial class TbChuyenNganh
    {
        public TbChuyenNganh()
        {
            TbGiangVien = new HashSet<TbGiangVien>();
            TbLop = new HashSet<TbLop>();
        }

        public string MaChuyenNganh { get; set; }
        public string TenChuyenNganh { get; set; }
        public string CN_MaBoMon { get; set; }

        public virtual TbBoMon CnMaBoMonNavigation { get; set; }
        public virtual ICollection<TbGiangVien> TbGiangVien { get; set; }
        public virtual ICollection<TbLop> TbLop { get; set; }
    }
}
