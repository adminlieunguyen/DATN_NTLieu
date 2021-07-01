using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
    public partial class TbSinhVien
    {
      
        public string MaSinhVien { get; set; }
        public string TenSinhVien { get; set; }
        public string NgaySinh { get; set; }
        public string GioiTinh { get; set; }
        public string NoiSinh { get; set; }
        public string QueQuan { get; set; }
        public string QuocTich { get; set; }
        public string DanToc { get; set; }
        public string TonGiao { get; set; }
        public string NoiThuongTru { get; set; }
        public string DoiTuongTroCap { get; set; }
        public string SoDienThoai { get; set; }
        public string Email { get; set; }
        public string CMND { get; set; }
        public string DiaChiBaoTin { get; set; }
        public string DiaChiTamTru { get; set; }
        public string TinhTrang { get; set; }
        public string SV_MaLop { get; set; }
        public string HinhAnh { get; set; }      
        public string TenLop { get; set; }
        public string MaChuyenNganh { get; set; }
        public string TenChuyenNganh { get; set; }
        public string MaBoMon { get; set; }
        public string TenBoMon { get; set; }
        public string TenKhoaHoc { get; set; }
        public string ThoiGian { get; set; }
        public string Tenhk { get; set; }
        public string MaMon { get; set; }
        public string TenMon { get; set; }
        public string SoTC { get; set; }
        public double Diem { get; set; }
        public double diemtb { get; set; }
        public double xeploai { get; set; }



        public string token { get; set; }
        public virtual TbLop SvMaLopNavigation { get; set; }
       
    }
}
