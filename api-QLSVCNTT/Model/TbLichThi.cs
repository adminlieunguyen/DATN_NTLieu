using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public partial class TbLichThi
    {
        public string MaLichThi { get; set; }
        public string BangLichThi { get; set; }
        public int? LT_MaLop { get; set; }

        public virtual TbLop LtMaLopNavigation { get; set; }
    }
}
