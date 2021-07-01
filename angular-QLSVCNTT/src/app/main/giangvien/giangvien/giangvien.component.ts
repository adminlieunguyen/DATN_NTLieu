import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;

@Component({
  selector: 'app-giangvien',
  templateUrl: './giangvien.component.html',
  styleUrls: ['./giangvien.component.css']
})
export class GiangvienComponent extends BaseComponent implements OnInit {
  public giangviens: any;
  public giangvien: any;
  public totalRecords:any;
  public pageSize = 3;
  public page = 1;
  public uploadedFiles: any[] = [];
  public formsearch: any;
  public formdata: any;
  public doneSetupForm: any;
  public showUpdateModal:any;
  public isCreate:any;
  submitted = false;
  @ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(private fb: FormBuilder, injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.formsearch = this.fb.group({
      'TenGiangVien': [''],
      'MaGiangVien': [''],
    });

   this.gvsearch();
  }

  loadPage(page) {
    this._api.post('/api/giangviens/search',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.giangvien = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }

  gvsearch() {
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/giangviens/search',{page: this.page, pageSize: this.pageSize, TenGiangVien: this.formsearch.get('TenGiangVien').value, MaGiangVien: this.formsearch.get('MaGiangVien').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.giangvien = res.data;
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

  onSubmit(value) {
    this.submitted = true;
    if (this.formdata.invalid) {
      return;
    }
    if(this.isCreate) {
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp = {
            TenGiangVien     : value.tenGiangVien,
            NgaySinh         : value.ngaySinh,
            GioiTinh         : value.gioiTinh,
            SoDienThoai      : value.soDienThoai,
            Email            : value.email,
            ChucVu           : value.chucVu,
            HocHamHocVi      : value.hocHamHocvi,
            HinhAnh          : data_image,
            GV_MaChuyenNganh : value.gV_MaChuyenNganh,
            Matkhau          : value.matkhau,
            Quyen            : value.quyen,
            MaGiangVien      : value.MaGiangVien
          };
        this._api.post('/api/giangviens/create-GiangVien',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Thêm giảng viên thành công');
          this.gvsearch();
          this.ClosegiangvienModal();
          });
      });
    } else {
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp;
        if(data == ''){
          tmp = {
                  TenGiangVien     : value.tenGiangVien,
                  NgaySinh         : value.ngaySinh,
                  GioiTinh         : value.gioiTinh,
                  SoDienThoai      : value.soDienThoai,
                  Email            : value.email,
                  ChucVu           : value.chucVu,
                  HocHamHocVi      : value.hocHamHocvi,
                  HinhAnh          : this.giangvien.hinhAnh,
                  GV_MaChuyenNganh : value.gV_MaChuyenNganh,
                  Matkhau          : value.matkhau,
                  Quyen            : value.quyen,
                  MaGiangVien      : this.giangvien.maGiangVien
                  };
        }else{
          tmp = {
                  TenGiangVien     : value.tenGiangVien,
                  NgaySinh         : value.ngaySinh,
                  GioiTinh         : value.gioiTinh,
                  SoDienThoai      : value.soDienThoai,
                  Email            : value.email,
                  ChucVu           : value.chucVu,
                  HocHamHocVi      : value.hocHamHocvi,
                  HinhAnh          : data_image,
                  GV_MaChuyenNganh : value.gV_MaChuyenNganh,
                  Matkhau          : value.matkhau,
                  Quyen            : value.quyen,
                  MaGiangVien      : this.giangvien.maGiangVien
                  };
        }
        this._api.post('/api/giangviens/update-GiangVien',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.gvsearch();
          this.ClosegiangvienModal();
          });
      });
    }

  }

  DeletegiangvienModal(row) {
    this._api.post('/api/giangviens/delete-GiangVien',{MaGiangVien:row.maGiangVien}).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.gvsearch();
      });
  }

  Reset() {
    this.giangvien = null;
    this.formdata = this.fb.group({
      'tenGiangVien':  ['', Validators.required],
      'ngaySinh':      [this.today, Validators.required],
      'gioiTinh':      [this.genders[0].value, Validators.required],
      'soDienThoai':      [this.today, Validators.required],
      'email':            ['', [Validators.required,Validators.email]],
      'chucVu':           ['',Validators.required],
      'hocHamHocVi':      ['',Validators.required],
      'hinhAnh':          [''],
      'gV_MaChuyenNganh': ['',Validators.required],
      'matkhau':          ['', [this.pwdCheckValidator]],
      'nhaplaimatkhau':   ['', Validators.required],
      'quyen':            [this.roles[0].value, Validators.required],
    }, {
      validator: MustMatch('matkhau', 'nhaplaimatkhau')
    });
  }

  CreategiangvienModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.giangvien = null;
    setTimeout(() => {
      $('#creategiangvienModal').modal('toggle');
      this.formdata = this.fb.group({
      'TenGiangVien':  ['', Validators.required],
      'NgaySinh':      [this.today, Validators.required],
      'GioiTinh':      [this.genders[0].value, Validators.required],
      'SoDienThoai':      [this.today, Validators.required],
      'Email':            ['', [Validators.required,Validators.email]],
      'ChucVu':           ['',Validators.required],
      'HocHamHocVi':      ['',Validators.required],
      'HinhAnh':          ['',Validators.required],
      'GV_MaChuyenNganh': ['',Validators.required],
      'Matkhau':          ['', [this.pwdCheckValidator]],
      'nhaplaimatkhau':   ['', Validators.required],
      'Quyen':            [this.roles[0].value, Validators.required],
      }, {
        validator: MustMatch('matkhau', 'nhaplaimatkhau')
      });
      this.formdata.get('ngaySinh').setValue(this.today);
      this.formdata.get('gioiTinh').setValue(this.genders[0].value);
      this.formdata.get('quyen').setValue(this.roles[0].value);
      this.doneSetupForm = true;
    });
  }
  public UpdategiangvienModal(row) {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = false;
    setTimeout(() => {
      $('#creategiangvienModal').modal('toggle');
      this._api.get('/api/giangvien/get-by-id/'+ row.maGiangVien).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.giangvien = res;
        let ngaysinh = new Date(this.giangvien.ngaysinh);
          this.formdata = this.fb.group({
            'tenGiangVien':  ['', Validators.required],
            'ngaySinh':      [ngaysinh, Validators.required],
            'gioiTinh':      [this.genders[0].value, Validators.required],
            'soDienThoai':      [this.today, Validators.required],
            'email':            ['', [Validators.required,Validators.email]],
            'chucVu':           ['',Validators.required],
            'hocHamHocVi':      ['',Validators.required],
            'hinhAnh':          [''],
            'gV_MaChuyenNganh': ['',Validators.required],
            'matkhau':          ['', [this.pwdCheckValidator]],
            'nhaplaimatkhau':   ['', Validators.required],
            'quyen':            [this.roles[0].value, Validators.required],
          }, {
            validator: MustMatch('matkhau', 'nhaplaimatkhau')
          });
          this.doneSetupForm = true;
        });
    }, 700);
  }
  ClosegiangvienModal() {
    $('#creategiangvienModal').closest('.modal').modal('hide');
  }
}

