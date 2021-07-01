import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;
@Component({
  selector: 'app-thanhtich',
  templateUrl: './thanhtich.component.html',
  styleUrls: ['./thanhtich.component.css'],
})
export class thanhtichComponent extends BaseComponent implements OnInit {
  public thanhtichs: any;
  public thanhtich: any;
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
      'tenthanhtich': [''],
      'mathanhtich': [''],
      'tt_masinhvien': [''],
      'ketqua': [''],
      'khenthuong': [''],
    });

   this.search();
  }

  loadPage(page) {
    this._api.post('/api/thanhtichs/search',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.thanhtichs = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }

  search() {
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/thanhtichs/search',{page: this.page, pageSize: this.pageSize, tenthanhtich: this.formsearch.get('tenthanhtich').value, taikhoan: this.formsearch.get('taikhoan').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.thanhtichs = res.data;
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
          tenthanhtich:value.tenthanhtich,
          mathanhtich:value.mathanhtich,
          tt_masinhvien:value.tt_masinhvien,
          ketqua:value.ketqua,
          khenthuong:value.khenthuong,
          };
        this._api.post('/api/thanhtichs/create-thanhtich',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Thêm thành công');
          this.search();
          this.closeModal();
          });
      });
    } else {
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp = {
          tenthanhtich:value.tenthanhtich,
          mathanhtich:value.mathanhtich,
          tt_masinhvien:value.tt_masinhvien,
          ketqua:value.ketqua,
          khenthuong:value.khenthuong,
          };
        this._api.post('/api/thanhtichs/update-thanhtich',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.closeModal();
          });
      });
    }

  }

  onDelete(row) {
    this._api.post('/api/thanhtichs/delete-thanhtich',{thanhtich_id:row.thanhtich_id}).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.search();
      });
  }

  Reset() {
    this.thanhtich = null;
    this.formdata = this.fb.group({
      'tenthanhtich': ['', Validators.required],
      'mathanhtich': ['',Validators.required],
      'tt_masinhvien': ['',Validators.required],
      'ketqua': ['',Validators.required],
      'khenthuong': ['',Validators.required],
    }, {
      validator: MustMatch('matkhau', 'nhaplaimatkhau')
    });
  }

  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.thanhtich = null;
    setTimeout(() => {
      $('#createthanhtichModal').modal('toggle');
      this.formdata = this.fb.group({
      'tenthanhtich': ['', Validators.required],
      'mathanhtich': ['',Validators.required],
      'tt_masinhvien': ['',Validators.required],
      'ketqua': ['',Validators.required],
      'khenthuong': ['',Validators.required],
      }, {
        validator: MustMatch('matkhau', 'nhaplaimatkhau')
      });
    });
  }
  public openUpdateModal(row) {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = false;
    setTimeout(() => {
      $('#createthanhtichModal').modal('toggle');
      this._api.get('/api/thanhtichs/get-by-id/'+ row.thanhtich_id).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.thanhtich = res;
        let tenthanhtich = new Date(this.thanhtich.tenthanhtich);
          this.formdata = this.fb.group({
            'mathanhtich': [this.thanhtich.mathanhtich, Validators.required],
            'tenthanhtich': [thanhtich.tenthanhtich, Validators.required],
            'tt_masinhvien': [this.thanhtich.tt_masinhvien,Validators.required],
            'ketqua': [this.thanhtich.ketqua,Validators.required],
            'khenthuong': [this.thanhtich.khenthuong,Validators.required],
          },
          );
          this.doneSetupForm = true;
        });
    }, 700);
  }

  closeModal() {
    $('#createthanhtichModal').closest('.modal').modal('hide');
  }
}
