using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using BLL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Model;

namespace API.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class SinhViensController : ControllerBase
    {
        private ISinhVienBusiness _sinhVienBusiness;
        private string _path;
        public SinhViensController(ISinhVienBusiness sinhVienBusiness, IConfiguration configuration)
        {
            _sinhVienBusiness = sinhVienBusiness;
            _path = configuration["AppSettings:PATH"];
        }

      
        public string SaveFileFromBase64String(string RelativePathFileName, string dataFromBase64String)
        {
            if (dataFromBase64String.Contains("base64,"))
            {
                dataFromBase64String = dataFromBase64String.Substring(dataFromBase64String.IndexOf("base64,", 0) + 7);
            }
            return WriteFileToAuthAccessFolder(RelativePathFileName, dataFromBase64String);
        }
        public string WriteFileToAuthAccessFolder(string RelativePathFileName, string base64StringData)
        {
            try
            {
                string result = "";
                string serverRootPathFolder = _path;
                string fullPathFile = $@"{serverRootPathFolder}\{RelativePathFileName}";
                string fullPathFolder = System.IO.Path.GetDirectoryName(fullPathFile);
                if (!Directory.Exists(fullPathFolder))
                    Directory.CreateDirectory(fullPathFolder);
                System.IO.File.WriteAllBytes(fullPathFile, Convert.FromBase64String(base64StringData));
                return result;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [Route("create-SinhVien")]
        [HttpPost]
        public TbSinhVien Create([FromBody] TbSinhVien model)
        {
            if (model.HinhAnh != null)
            {
                var arrSV = model.HinhAnh.Split(';');
                if (arrSV.Length == 3)
                {
                    var savePath = $"{arrSV[0]}";
                    model.HinhAnh = $"{savePath}";
                    SaveFileFromBase64String(savePath, arrSV[2]);
                }
            }
            //model.MaSinhVien = Guid.NewGuid().ToString();
            _sinhVienBusiness.Create(model);
            return model;
        }

        [Route("update-SinhVien")]
        [HttpPost]
        public TbSinhVien Update([FromBody] TbSinhVien model)
        {
            if (model.HinhAnh != null)
            {
                var arrSV = model.HinhAnh.Split(';');
                if (arrSV.Length == 3)
                {
                    var savePath = $@"assets/images/{arrSV[0]}";
                    model.HinhAnh = $"{savePath}";
                    SaveFileFromBase64String(savePath, arrSV[2]);
                }
            }
            _sinhVienBusiness.Update(model);
            return model;
        }

        [Route("delete-SinhVien")]
        [HttpPost]
        public IActionResult DeleteSinhVien([FromBody] Dictionary<string, object> formData)
        {
            string MaSinhVien = "";
            if (formData.Keys.Contains("MaSinhVien") && !string.IsNullOrEmpty(Convert.ToString(formData["MaSinhVien"]))) { MaSinhVien = Convert.ToString(formData["MaSinhVien"]); }
            _sinhVienBusiness.Delete(MaSinhVien);
            return Ok();
        }
        [Route("search-SinhVien")]
        [HttpPost]
        public ResponseModel Search([FromBody] Dictionary<string, object> formData)
        {
            var response = new ResponseModel();
            try
            {
                var pageIndex = int.Parse(formData["pageIndex"].ToString());
                var pageSize = int.Parse(formData["pageSize"].ToString());
                string TenSinhVien = "";
                if (formData.Keys.Contains("TenSinhVien") && !string.IsNullOrEmpty(Convert.ToString(formData["TenSinhVien"])))
                { TenSinhVien = Convert.ToString(formData["TenSinhVien"]); }

                string SoDienThoai = "";
                if (formData.Keys.Contains("SoDienThoai") && !string.IsNullOrEmpty(Convert.ToString(formData["SoDienThoai"])))
                { SoDienThoai = Convert.ToString(formData["SoDienThoai"]); }
                long total = 0;
                var data = _sinhVienBusiness.Search(pageIndex, pageSize, out total, TenSinhVien, SoDienThoai);
                response.TotalItems = total;
                response.Data = data;
                response.pageIndex = pageIndex;
                response.pageSize = pageSize;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return response;
        }
        [Route("get-by-id/{MaSinhVien}")]
        [HttpGet]
        public TbSinhVien GetSVbyID(string MaSinhVien)
        {
            return _sinhVienBusiness.GetSVbyID(MaSinhVien);
        }

        [Route("get-by-kqht/{MaSinhVien}")]
        [HttpGet]
        public TbSinhVien GetSVbykqht(string MaSinhVien)
        {
            return _sinhVienBusiness.GetSVbykqht(MaSinhVien);
        }

        [Route("get-by-listkqht/{MaSinhVien}")]
        [HttpGet]
        public List<TbSinhVien> ListSVbykqht(string id)
        {
            return _sinhVienBusiness.Listkqht(id);
        }

        [Route("get-diemtbc/{MaSinhVien}")]
        [HttpGet]
        public TbSinhVien GetSVDiemtb(string id)
        {
            return _sinhVienBusiness.GetSVDiemtb(id);
        }

        [Route("get-listsvxuatsac/{MaSinhVien}")]
        [HttpGet]
        public List<TbSinhVien> Listsvxs(string id)
        {
            return _sinhVienBusiness.Listsvxs(id);
        }


    }
}
