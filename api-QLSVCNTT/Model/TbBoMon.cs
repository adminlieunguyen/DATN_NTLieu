using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public partial class TbBoMon
    {
        public TbBoMon()
        {
            TbChuyenNganh = new HashSet<TbChuyenNganh>();
        }

        public string MaBoMon { get; set; }
        public string TenBoMon { get; set; }

        public virtual ICollection<TbChuyenNganh> TbChuyenNganh { get; set; }
    }
}
