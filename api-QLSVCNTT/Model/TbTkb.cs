using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{ 
    public class TbTkb
    {
        public string MaTkb { get; set; }
        public int TKB_MaLop { get; set; }
        public string NoiDung { get; set; }
        public string GhiChu { get; set; }

        public virtual TbLop TkbMaLopNavigation { get; set; }
    }
}
