using DAL.Helper;
using Model;
using Helper;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System;

namespace DAL
{
    public partial class SinhVienRepository : ISinhVienRepository
    {
        private IDatabaseHelper _dbHelper;
        public SinhVienRepository(IDatabaseHelper dbHelper)
        {
            _dbHelper = dbHelper;
        }

        public bool SVCreate(TbSinhVien model)
        {

            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "Tb_SinhVien_create",
                "@MaSinhVien    ", model.MaSinhVien,
                "@TenSinhVien   ", model.TenSinhVien,
                "@NgaySinh      ", model.NgaySinh,
                "@GioiTinh      ", model.GioiTinh,
                "@NoiSinh       ", model.NoiSinh,
                "@QueQuan       ", model.QueQuan,
                "@QuocTich      ", model.QuocTich,
                "@DanToc        ", model.DanToc,
                "@TonGiao       ", model.TonGiao,
                "@NoiThuongTru  ", model.NoiThuongTru,
                "@DoiTuongTroCap", model.DoiTuongTroCap,
                "@SoDienThoai   ", model.SoDienThoai,
                "@Email         ", model.Email,
                "@CMND         ", model.CMND,
                "@DiaChiBaoTin  ", model.DiaChiBaoTin,
                "@DiaChiTamTru  ", model.DiaChiTamTru,
                "@TinhTrang     ", model.TinhTrang,
                "@SV_MaLop      ", model.SV_MaLop,
                "@HinhAnh       ", model.HinhAnh);

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

        public bool SVUpdate(TbSinhVien model)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "Tb_SinhVien_update",
                "@MaSinhVien    ", model.MaSinhVien,
                "@TenSinhVien   ", model.TenSinhVien,
                "@NgaySinh      ", model.NgaySinh,
                "@GioiTinh      ", model.GioiTinh,
                "@NoiSinh       ", model.NoiSinh,
                "@QueQuan       ", model.QueQuan,
                "@QuocTich      ", model.QuocTich,
                "@DanToc        ", model.DanToc,
                "@TonGiao       ", model.TonGiao,
                "@NoiThuongTru  ", model.NoiThuongTru,
                "@DoiTuongTroCap", model.DoiTuongTroCap,
                "@SoDienThoai   ", model.SoDienThoai,
                "@Email         ", model.Email,
                "@CMND         ", model.CMND,
                "@DiaChiBaoTin  ", model.DiaChiBaoTin,
                "@DiaChiTamTru  ", model.DiaChiTamTru,
                "@TinhTrang     ", model.TinhTrang,
                "@SV_MaLop       ", model.SV_MaLop,
                "@HinhAnh       ", model.HinhAnh);
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
        public bool SVDelete(string MaSinhVien)
        {
            string msgError = "";
            try
            {
                var result = _dbHelper.ExecuteScalarSProcedureWithTransaction(out msgError, "Tb_SinhVien_delete",
                "@MaSinhVien", MaSinhVien);
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
        public List<TbSinhVien> SVSearch(int pageIndex, int pageSize, out long total, string TenSinhVien, string SoDienThoai)
        {
            string msgError = "";
            total = 0;
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "Tb_SinhVien_search",
                    "@pageIndex", pageIndex,
                    "@pageSize", pageSize,
                    "@TenSinhVien", TenSinhVien,
                    "@SoDienThoai", SoDienThoai);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                if (dt.Rows.Count > 0) total = (long)dt.Rows[0]["RecordCount"];
                return dt.ConvertTo<TbSinhVien>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

       /* public TbSinhVien GetSinhVien(string maSinhVien, string matKhau)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "SV_get_by_id_password",
                     "@MaSinhVien", maSinhVien,
                     "@MatKhau", matKhau);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TbSinhVien>().FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
*/
        public TbSinhVien GetSVbyID(string id)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "Tb_SinhVien_get_by_id",
                     "@MaSinhVien", id);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TbSinhVien>().FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public TbSinhVien GetSVbykqht(string id)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "Tb_SinhVien_get_diemtbc",
                     "@MaSinhVien", id);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TbSinhVien>().FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<TbSinhVien> Listkqht(string id)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "Tb_SinhVien_get_diem_by_idsv",
                     "@MaSinhVien", id);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TbSinhVien>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public TbSinhVien GetSVDiemtb(string id)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "Tb_SinhVien_get_diemtbc",
                     "@MaSinhVien", id);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TbSinhVien>().FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<TbSinhVien> Listsvxs(string id)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "Tb_SinhVien_get_svxuatsac",
                     "@MaSinhVien", id);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TbSinhVien>().ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /*public TbSinhVien GetSVbytt(string id)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "Tb_SinhVien_get_by_qtht",
                     "@MaSinhVien", id);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TbSinhVien>().FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public TbSinhVien GetSVbyqtht(string id)
        {
            string msgError = "";
            try
            {
                var dt = _dbHelper.ExecuteSProcedureReturnDataTable(out msgError, "Tb_SinhVien_get_by_tt",
                     "@MaSinhVien", id);
                if (!string.IsNullOrEmpty(msgError))
                    throw new Exception(msgError);
                return dt.ConvertTo<TbSinhVien>().FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }*/
    }
}
