import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';
import 'rxjs/add/operator/takeUntil';
import { RowToggler } from 'primeng/table';
declare var $: any;
@Component({
  selector: 'app-sinhvien',
  templateUrl:'./sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css'],
})
export class SinhvienComponent extends BaseComponent implements OnInit {
  public sinhviens: any;
  public sinhvien: any;
  public kq: any;
  public dtb:any;
  public totalRecords:any;
  public pageSize = 3;
  public pageIndex = 1;
  public uploadedFiles: any[] = [];
  public formsearch: any;
  public formdata: any;
  public doneSetupForm: any;
  public showUpdateModal:any;
  public isCreate:any;
  public showDetailModal:any;
  public showDiemModal:any;
  submitted = false;
  @ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(private fb: FormBuilder, injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.formsearch = this.fb.group({
      'TenSinhVien': [''],
      'NoiThuongTru': [''],
      'SoDienThoai': [''],
      'SV_MaLop' :['']
    });
   this.search();
  }

  loadPage(page) {
    this._api.post('/api/sinhviens/search-SinhVien',{pageIndex: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.sinhviens = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }

  search() {
       this.pageIndex = 1;
       this.pageSize = 5;
       this._api.post('/api/sinhviens/search-SinhVien',{pageIndex: this.pageIndex, pageSize: this.pageSize, TenSinhVien: this.formsearch.get('TenSinhVien').value, NoiThuongTru: this.formsearch.get('NoiThuongTru').value, SV_MaLop: this.formsearch.get('SV_MaLop').value, SoDienThoai: this.formsearch.get('SoDienThoai').value}).takeUntil(this.unsubscribe).subscribe(res => {
       this.sinhviens = res.data;
       this.totalRecords =  res.totalItems;
       this.pageSize = res.pageSize;
      });
  }

  pwdCheckValidator(control){
    var filteredStrings = {search:control.value, select:'@#!$%&*'}
    var result = (filteredStrings.select.match(new RegExp('[' + filteredStrings.search + ']', 'g')) || []).join('');
    if(control.value.length < 6 || !result){
        return {matkhau: true};
    }
  }
  get f() { return this.formdata.controls; }

  onSubmit(value)
  {
    this.submitted = true;
    if (this.formdata.invalid) {
      return;
    }

    if(this.isCreate) {
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp = {
            HinhAnh       : data_image,
            MaSinhVien    : value.maSinhVien,
            TenSinhVien   : value.tenSinhVien,
            NgaySinh      : value.ngaySinh,
            GioiTinh      : value.gioiTinh,
            NoiSinh       : value.noiSinh,
            QueQuan       : value.queQuan,
            QuocTich      : value.quocTich,
            DanToc        : value.danToc,
            TonGiao       : value.tonGiao,
            NoiThuongTru  : value.noiThuongTru,
            DoiTuongTroCap: value.doiTuongTroCap,
            SoDienThoai   : value.soDienThoai,
            Email         : value.email,
            CMTND         : value.cMTND,
            DiaChiBaoTin  : value.diaChiBaoTin,
            DiaChiTamTru  : value.diaChiTamTru,
            TinhTrang     : value.tinhTrang,
            SV_MaLop       : value.sV_MaLop,
          };
        this._api.post('/api/sinhviens/create-SinhVien',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Thêm sinh viên thành công');
          this.search();
          this.ClosesinhvienModal();
          });
      });
    }
    else {
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp;
        if(data == ''){
          tmp = {
            HinhAnh       :this.sinhvien.hinhAnh,
            MaSinhVien    :this.sinhvien.maSinhVien,
            TenSinhVien   : value.tenSinhVien,
            NgaySinh      : value.ngaySinh,
            GioiTinh      : value.gioiTinh,
            NoiSinh       : value.noiSinh,
            QueQuan       : value.queQuan,
            QuocTich      : value.quocTich,
            DanToc        : value.danToc,
            TonGiao       : value.tonGiao,
            NoiThuongTru  : value.noiThuongTru,
            DoiTuongTroCap: value.doiTuongTroCap,
            SoDienThoai   : value.soDienThoai,
            Email         : value.email,
            CMTND         : value.cMTND,
            DiaChiBaoTin  : value.diaChiBaoTin,
            DiaChiTamTru  : value.diaChiTamTru,
            TinhTrang     : value.tinhTrang,
            SV_MaLop       : value.sV_MaLop,
            };
        }else{
          tmp = {
            HinhAnh:data_image,
            MaSinhVien    :this.sinhvien.maSinhVien,
            TenSinhVien   : value.tenSinhVien,
            NgaySinh      : value.ngaySinh,
            GioiTinh      : value.gioiTinh,
            NoiSinh       : value.noiSinh,
            QueQuan       : value.queQuan,
            QuocTich      : value.quocTich,
            DanToc        : value.danToc,
            TonGiao       : value.tonGiao,
            NoiThuongTru  : value.noiThuongTru,
            DoiTuongTroCap: value.doiTuongTroCap,
            SoDienThoai   : value.soDienThoai,
            Email         : value.email,
            CMTND         : value.cMTND,
            DiaChiBaoTin  : value.diaChiBaoTin,
            DiaChiTamTru  : value.diaChiTamTru,
            TinhTrang     : value.tinhTrang,
            SV_MaLop       : value.sV_MaLop,
            };
        }
        this._api.post('/api/sinhviens/update-SinhVien',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.ClosesinhvienModal();
          });
      });
    }

  }

  DeletesinhvienModal(row) {
    this._api.post('/api/sinhviens/delete-SinhVien',{MaSinhVien:row.maSinhVien}).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.search();
      });
  }

 public ketquaht(row){
    this.doneSetupForm = false;
    this.showDiemModal=true;
    setTimeout(() => {
    $('#DiemModal').modal('toggle');
    
    this._api.get('/api/sinhviens/get-by-listkqht/'+ row.maSinhVien).takeUntil(this.unsubscribe).subscribe(res => {
      this.kq=res;
      this.doneSetupForm = true;
    });
  });
}

 public DetailModal(row){
  this.doneSetupForm = false;
  this.showDetailModal=true;
  setTimeout(() => {
  $('#DetailModal').modal('toggle');
    this._api.get('/api/sinhviens/get-by-id/'+ row.maSinhVien).takeUntil(this.unsubscribe).subscribe(res => {
      this.sinhvien=res;
      this.doneSetupForm = true;
    });
    
 });
}


  Reset() {
    this.sinhvien = null;
    this.formdata = this.fb.group({
      'maSinhVien' : ['',Validators.required],
      'tenSinhVien': ['', Validators.required],
      'ngaySinh'      : [[this.today, Validators.required]],
      'gioiTinh'      : [this.genders[0].value, Validators.required],
      'noiSinh'       : [''],
      'queQuan'       : ['',Validators.required],
      'quocTich'      : [''],
      'danToc'        : [''],
      'tonGiao'       : [''],
      'noiThuongTru'  : ['',Validators.required],
      'doiTuongTroCap': [''],
      'soDienThoai'   : ['',Validators.required],
      'email'         : ['',Validators.required,Validators.email],
      'cMTND'         : [''],
      'diaChiBaoTin'  : [''],
      'ddiaChiTamTru' : [''],
      'tinhTrang'     : [''],
      'sV_MaLop'      : ['',Validators.required],
      'hinhAnh'       : ['',Validators.required],
    });
  }

  CreatesinhvienModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.sinhvien = null;
    setTimeout(() => {
      $('#CreatesinhvienModal').modal('toggle');
      this.formdata = this.fb.group({
        'maSinhVien' : ['',Validators.required],
        'tenSinhVien': ['', Validators.required],
        'ngaySinh'      : ['', Validators.required],
        'gioiTinh'      : [this.genders[0].value, Validators.required],
        'noiSinh'       : [''],
        'queQuan'       : ['',Validators.required],
        'quocTich'      : [''],
        'danToc'        : [''],
        'tonGiao'       : [''],
        'noiThuongTru'  : ['',Validators.required],
        'doiTuongTroCap': [''],
        'soDienThoai'   : ['',Validators.required],
        'email'         : ['',Validators.required,Validators.email],
        'cMTND'         : [''],
        'diaChiBaoTin'  : [''],
        'diaChiTamTru'  : [''],
        'tinhTrang'     : [''],
        'sV_MaLop'      : ['',Validators.required],
        'hinhAnh'       : [''],
      });
      this.formdata.get('ngaySinh').setValue(this.today);
      this.formdata.get('gioiTinh').setValue(this.genders[0].value);
      this.doneSetupForm = true;
    });
  }

  public UpdatesinhvienModal(row) {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = false;
    setTimeout(() => {
      $('#CreatesinhvienModal').modal('toggle');
      this._api.get('/api/sinhviens/get-by-id/'+ row.maSinhVien).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.sinhvien = res;
        let ngaysinh = new Date(this.sinhvien.ngaySinh);
        this.formdata = this.fb.group({
          'maSinhVien'    : [this.sinhvien.maSinhVien,Validators.required],
          'tenSinhVien'   : [this.sinhvien.tenSinhVien, Validators.required],
          'ngaySinh'      : [ngaysinh, Validators.required],
          'gioiTinh'      : [this.sinhvien.gioiTinh, Validators.required],
          'noiSinh'       : [this.sinhvien.noiSinh],
          'queQuan'       : [this.sinhvien.queQuan],
          'quocTich'      : [this.sinhvien.quocTich],
          'danToc'        : [this.sinhvien.danToc],
          'tonGiao'       : [this.sinhvien.tonGiao],
          'noiThuongTru'  : [this.sinhvien.noiThuongTru,Validators.required],
          'doiTuongTroCap': [this.sinhvien.doiTuongTroCap],
          'soDienThoai'   : [this.sinhvien.soDienThoai,Validators.required],
          'email'         : [this.sinhvien.email, [Validators.required,Validators.email]],
          'cMTND'         : [this.sinhvien.cMTND],
          'diaChiBaoTin'  : [this.sinhvien.diaChiBaoTin],
          'diaChiTamTru'  : [this.sinhvien.diaChiTamTru],
          'tinhTrang'     : [this.sinhvien.tinhTrang],
          'sV_MaLop'      : [this.sinhvien.sV_MaLop,Validators.required],
          'hinhAnh'       : [this.sinhvien.hinhAnh],
          });
          this.doneSetupForm = true;
        });
    }, 700);
  }

  ClosesinhvienModal() {
    $('#CreatesinhvienModal').closest('.modal').modal('hide');
  }
  CloseDetailModal() {
    $('#DetailModal').closest('.modal').modal('hide');
  }
  CloseDiemModal() {
    $('#DiemModal').closest('.modal').modal('hide');
  }
}
