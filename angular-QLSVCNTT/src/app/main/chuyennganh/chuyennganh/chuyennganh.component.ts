import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;
@Component({
  selector: 'app-chuyennganh',
  templateUrl: './chuyennganh.component.html',
  styleUrls: ['./chuyennganh.component.css'],
})
export class ChuyennganhComponent extends BaseComponent implements OnInit {
  public chuyennganhs: any;
  public chuyennganh: any;
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
      'tenchuyennganh': [''],
      'taikhoan': [''],
    });

   this.search();
  }

  loadPage(page) {
    this._api.post('/api/chuyennganhs/search',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.chuyennganhs = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }

  search() {
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/chuyennganhs/search',{page: this.page, pageSize: this.pageSize, tenchuyennganh: this.formsearch.get('tenchuyennganh').value, taikhoan: this.formsearch.get('taikhoan').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.chuyennganhs = res.data;
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
           tenchuyennganh:value.tenchuyennganh,
           machuyennganh:value.machuyennganh,
          };
        this._api.post('/api/chuyennganhs/create-chuyennganh',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Thêm thành công');
          this.search();
          this.closeModal();
          });
      });
    } else {
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp = {
          tenchuyennganh:value.tenchuyennganh,
          machuyennganh:value.machuyennganh,
          };
        this._api.post('/api/chuyennganhs/update-chuyennganh',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.closeModal();
          });
      });
    }

  }

  onDelete(row) {
    this._api.post('/api/chuyennganhs/delete-chuyennganh',{chuyennganh_id:row.chuyennganh_id}).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.search();
      });
  }

  Reset() {
    this.chuyennganh = null;
    this.formdata = this.fb.group({
      'tenchuyennganh': ['', Validators.required],
      'machuyennganh': ['',Validators.required],
    }, {
      validator: MustMatch('matkhau', 'nhaplaimatkhau')
    });
  }

  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.chuyennganh = null;
    setTimeout(() => {
      $('#createchuyennganhModal').modal('toggle');
      this.formdata = this.fb.group({
      'tenchuyennganh': ['', Validators.required],
      'machuyennganh': ['',Validators.required],
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
      $('#createchuyennganhModal').modal('toggle');
      this._api.get('/api/chuyennganhs/get-by-id/'+ row.chuyennganh_id).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.chuyennganh = res;
        let tenchuyennganh = new Date(this.chuyennganh.tenchuyennganh);
          this.formdata = this.fb.group({
            'machuyennganh': [this.chuyennganh.machuyennganh, Validators.required],
            'tenchuyennganh': [chuyennganh.tenchuyennganh, Validators.required],
          },
          );
          this.doneSetupForm = true;
        });
    }, 700);
  }


  closeModal() {
    $('#createchuyennganhModal').closest('.modal').modal('hide');
  }
}

