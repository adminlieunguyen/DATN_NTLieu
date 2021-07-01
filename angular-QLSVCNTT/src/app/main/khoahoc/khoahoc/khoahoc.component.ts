import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;
@Component({
  selector: 'app-khoahoc',
  templateUrl: './khoahoc.component.html',
  styleUrls: ['./khoahoc.component.css'],
})
export class KhoahocComponent extends BaseComponent implements OnInit {
  public khoahocs: any;
  public khoahoc: any;
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
      'tenkhoahoc': [''],
      'taikhoan': [''],
    });

   this.search();
  }

  loadPage(page) {
    this._api.post('/api/khoahocs/search',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.khoahocs = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }

  search() {
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/khoahocs/search',{page: this.page, pageSize: this.pageSize, tenkhoahoc: this.formsearch.get('tenkhoahoc').value, taikhoan: this.formsearch.get('taikhoan').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.khoahocs = res.data;
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
           tenkhoahoc:value.tenkhoahoc,
           makhoahoc:value.makhoahoc,
           thoigian:value.thoigian,
          };
        this._api.post('/api/khoahocs/create-khoahoc',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Thêm thành công');
          this.search();
          this.closeModal();
          });
      });
    } else {
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp = {
          tenkhoahoc:value.tenkhoahoc,
          makhoahoc:value.makhoahoc,
          thoigian:value.thoigian,
          };
        this._api.post('/api/khoahocs/update-khoahoc',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.closeModal();
          });
      });
    }

  }

  onDelete(row) {
    this._api.post('/api/khoahocs/delete-khoahoc',{khoahoc_id:row.khoahoc_id}).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.search();
      });
  }

  Reset() {
    this.khoahoc = null;
    this.formdata = this.fb.group({
      'tenkhoahoc': ['', Validators.required],
      'makhoahoc': ['',Validators.required],
      'thoigian': ['',Validators.required],
    }, {
      validator: MustMatch('matkhau', 'nhaplaimatkhau')
    });
  }

  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.khoahoc = null;
    setTimeout(() => {
      $('#createkhoahocModal').modal('toggle');
      this.formdata = this.fb.group({
      'tenkhoahoc': ['', Validators.required],
      'makhoahoc': ['',Validators.required],
      'thoigian': ['',Validators.required],
      }, {
        validator: MustMatch('matkhau', 'nhaplaimatkhau')
      });
    });
  }


  closeModal() {
    $('#createkhoahocModal').closest('.modal').modal('hide');
  }
}
