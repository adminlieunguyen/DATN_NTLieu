import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;
@Component({
  selector: 'app-quatrinhhoctap',
  templateUrl: './quatrinhhoctap.component.html',
  styleUrls: ['./quatrinhhoctap.component.css'],
})
export class QuatrinhhoctapComponent extends BaseComponent implements OnInit {
  public quatrinhhoctaps: any;
  public quatrinhhoctap: any;
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
      'maquatrinh': [''],
      'qt_masinhvien': [''],
      'qt_malop': [''],
      'tinhtrang': [''],
    });

   this.search();
  }

  loadPage(page) {
    this._api.post('/api/quatrinhhoctaps/search',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.quatrinhhoctaps = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }

  search() {
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/quatrinhhoctaps/search',{page: this.page, pageSize: this.pageSize, tenquatrinhhoctap: this.formsearch.get('tenquatrinhhoctap').value, taikhoan: this.formsearch.get('taikhoan').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.quatrinhhoctaps = res.data;
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
           maquatrinh:value.tenquatrinhhoctap,
           qt_masinhvien:value.maquatrinhhoctap,
           qt_malop:value.qt_malop,
           tinhtrang:value.tinhtrang,
        }
        this._api.post('/api/quatrinhhoctaps/create-quatrinhhoctap',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Thêm thành công');
          this.search();
          this.closeModal();
          });
      });
    } else {
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp = {
          maquatrinh:value.tenquatrinhhoctap,
          qt_masinhvien:value.maquatrinhhoctap,
          qt_malop:value.qt_malop,
          tinhtrang:value.tinhtrang,
          };
        this._api.post('/api/quatrinhhoctaps/update-quatrinhhoctap',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.closeModal();
          });
      });
    }

  }

  onDelete(row) {
    this._api.post('/api/quatrinhhoctaps/delete-quatrinhhoctap',{quatrinhhoctap_id:row.quatrinhhoctap_id}).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.search();
      });
  }

  Reset() {
    this.quatrinhhoctap = null;
    this.formdata = this.fb.group({
      'tenquatrinhhoctap': ['', Validators.required],
      'maquatrinhhoctap': ['',Validators.required],
      'qt_malop': ['',Validators.required],
      'qtinhtrang': ['',Validators.required],
    }, {
      validator: MustMatch('matkhau', 'nhaplaimatkhau')
    });
  }

  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.quatrinhhoctap = null;
    setTimeout(() => {
      $('#createquatrinhhoctapModal').modal('toggle');
      this.formdata = this.fb.group({
      'tenquatrinhhoctap': ['', Validators.required],
      'maquatrinhhoctap': ['',Validators.required],
      'qt_malop': ['',Validators.required],
      'qtinhtrang': ['',Validators.required],
      }, {
      });
    });
  }
  public openUpdateModal(row) {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = false;
    setTimeout(() => {
      $('#createquatrinhhoctapModal').modal('toggle');
      this._api.get('/api/quatrinhhoctaps/get-by-id/'+ row.quatrinhhoctap_id).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.quatrinhhoctap = res;
        let maquatrinh = new Date(this.quatrinhhoctap.maquatrinh);
          this.formdata = this.fb.group({
            'qt_masinhvien': [this.quatrinhhoctap.qt_masinhvien, Validators.required],
            'maquatrinh': [quatrinhhoctap.maquatrinh, Validators.required],
            'qt_malop': [this.quatrinhhoctap.qt_malop,Validators.required],
            'tinhtrang': [this.quatrinhhoctap.tinhtrang,Validators.required],
          }, {
            validator: MustMatch('matkhau', 'nhaplaimatkhau')
          });
          this.doneSetupForm = true;
        });
    }, 700);
  }

  closeModal() {
    $('#createquatrinhhoctapModal').closest('.modal').modal('hide');
  }
}
