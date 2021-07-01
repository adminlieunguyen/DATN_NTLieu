using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class TbHeDaoTao
    {
        public string MaHDT { get; set; }
        public string TenHDT { get; set; }
        public virtual TbSinhVien TtMaSinhVienNavigation { get; set; }
    }
}
