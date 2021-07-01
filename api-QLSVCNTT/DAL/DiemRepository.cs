using DAL.Helper;
using Model;
using Helper;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System;
using DAL.Interfaces;

namespace DAL
{
    public partial class DiemRepository : IDiemRepository
    {
     

    private IDatabaseHelper _dbHelper;
        public DiemRepository(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }

        public bool DiemCreate(TbDiem model)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "Tb_Diem_create",
                "@Masv   ", model.Masv,
                "@MaDiem ", model.MaDiem,
                "@D_MaMH ", model.D_MaMH,
                "@Diem	 ", model.Diem,
                "@D_HK   ", model.D_HK,
                "@xeploai", model.xeploai
               );

                if ((result != null && !string.IsNullOrEmpty(result.ToString())) || !string.IsNullOrEmpty(msgError))
                {
                    throw new Exception(Convert.ToString(result) + msgError);
                }
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool DiemDelete(string id)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "Tb_Diem_delete",
                "@MaDiem", id);
                if ((result != null && !string.IsNullOrEmpty(result.ToString())) || !string.IsNullOrEmpty(msgError))
                {
                    throw new Exception(Convert.ToString(result) + msgError);
                }
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<TbDiem> DiemSearch(int pageIndex, int pageSize, out long total, string Masv)
        {
            string msgError = "";
            total = 0;
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "Tb_Diem_search",
                    "@pageIndex", pageIndex,
                    "@pageSize", pageSize,
                    "@Masv", Masv
                    );
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                if (dt.Rows.Count > 0) total = (long)dt.Rows[0]["RecordCount"];
                return dt.ConvertTo<TbDiem>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

       /* public TbSinhVien GetDiemtb(string id)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "Tb_Diem_tbc",
                     "@Masv", id);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TbSinhVien>().FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }*/


        public bool DiemUpdate(TbDiem model)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "Tb_Diem_update",
                 "@MaDiem     ", model.MaDiem,
                 "@MaDiem	  ", model.MaDiem,
                 "@D_MaMH	      ", model.D_MaMH,
                 "@Diem	      ", model.Diem);
                if ((result != null && !string.IsNullOrEmpty(result.ToString())) || !string.IsNullOrEmpty(msgError))
                {
                    throw new Exception(Convert.ToString(result) + msgError);
                }
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public TbDiem GetDiembyID(string MaDiem)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "Tb_Diem_get_by_id",
                     "@MaDiem", MaDiem);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TbDiem>().FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        
    }

}
