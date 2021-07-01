using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
    public partial interface IDiemBusiness
    {
        TbDiem GetDiembyID(string MaDiem);
        bool DiemCreate(TbDiem model);
        bool DiemUpdate(TbDiem model);
        bool DiemDelete(string id);
        List<TbDiem> DiemSearch(int pageIndex, int pageSize, out long total, string Masv);

    }
}
