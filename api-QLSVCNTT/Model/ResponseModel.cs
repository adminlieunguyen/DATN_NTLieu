using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public class ResponseModel
    {
        public long TotalItems { get; set; }
        public int pageIndex { get; set; }
        public int pageSize { get; set; }
        public dynamic Data { get; set; } 
    }
}
