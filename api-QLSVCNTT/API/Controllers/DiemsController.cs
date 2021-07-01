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
    public class DiemsController : ControllerBase
    {
        private IDiemBusiness _diemBusiness;
        private string _path;
        public DiemsController(IDiemBusiness DiemBusiness, IConfiguration configuration)
        {
            _diemBusiness = DiemBusiness;
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

        [Route("create-Diem")]
        [HttpPost]
        public TbDiem Create([FromBody] TbDiem model)
        {
            object p = _diemBusiness.DiemCreate(model);
            return model;
        }

        [Route("update-Diem")]
        [HttpPost]
        public TbDiem Update([FromBody] TbDiem model)
        {
            _diemBusiness.DiemUpdate(model);
            return model;
        }

        [Route("delete-Diem")]
        [HttpPost]
        public IActionResult DeleteDiem([FromBody] Dictionary<string, object> formData)
        {
            string MaDiem = "";
            if (formData.Keys.Contains("MaDiem") && !string.IsNullOrEmpty(Convert.ToString(formData["MaDiem"]))) { MaDiem = Convert.ToString(formData["MaDiem"]); }
            _diemBusiness.DiemDelete(MaDiem);
            return Ok();
        }
        [Route("search-Diem")]
        [HttpPost]
        public ResponseModel Search([FromBody] Dictionary<string, object> formData)
        {
            var response = new ResponseModel();
            try
            {
                var pageIndex = int.Parse(formData["pageIndex"].ToString());
                var pageSize = int.Parse(formData["pageSize"].ToString());
                string Masv = "";
                if (formData.Keys.Contains("Masv") && !string.IsNullOrEmpty(Convert.ToString(formData["Masv"])))
                { Masv = Convert.ToString(formData["Masv"]); }
                long total = 0;
                var data = _diemBusiness.DiemSearch(pageIndex, pageSize, out total, Masv);
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

        [Route("get-by-id/{id}")]
        [HttpGet]
        public TbDiem GetDiembyID(string id)
        {
            return _diemBusiness.GetDiembyID(id);
        }
    }
}

