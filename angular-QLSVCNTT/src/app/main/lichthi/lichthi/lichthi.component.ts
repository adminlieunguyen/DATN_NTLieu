import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;
@Component({
  selector: 'app-lichthi',
  templateUrl: './lichthi.component.html',
  styleUrls: ['./lichthi.component.css'],
})
export class LichthiComponent extends BaseComponent implements OnInit {
  public lichthis: any;
  public lichthi: any;
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
      'malichthi': [''],
      'banglichthi': [''],
      'lt_malop': [''],
    });

   this.search();
  }

  loadPage(page) {
    this._api.post('/api/lichthis/search',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.lichthis = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }

  search() {
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/lichthis/search',{page: this.page, pageSize: this.pageSize, tenlichthi: this.formsearch.get('tenlichthi').value, taikhoan: this.formsearch.get('taikhoan').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.lichthis = res.data;
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
           malichthi:value.tenlichthi,
           banglichthi:value.malichthi,
           lt_malop:value.lt_malop,
          };
        this._api.post('/api/lichthis/create-lichthi',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Thêm thành công');
          this.search();
          this.closeModal();
          });
      });
    } else {
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp = {
          malichthi:value.tenlichthi,
          banglichthi:value.malichthi,
          lt_malop:value.lt_malop,
          };
        this._api.post('/api/lichthis/update-lichthi',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.closeModal();
          });
      });
    }

  }

  onDelete(row) {
    this._api.post('/api/lichthis/delete-lichthi',{lichthi_id:row.lichthi_id}).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.search();
      });
  }

  Reset() {
    this.lichthi = null;
    this.formdata = this.fb.group({
      'tenlichthi': ['', Validators.required],
      'malichthi': ['',Validators.required],
      'lt_malop': ['',Validators.required],
    }, {
      validator: MustMatch('matkhau', 'nhaplaimatkhau')
    });
  }

  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.lichthi = null;
    setTimeout(() => {
      $('#createlichthiModal').modal('toggle');
      this.formdata = this.fb.group({
      'tenlichthi': ['', Validators.required],
      'malichthi': ['',Validators.required],
      'lt_malop': ['',Validators.required],
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
      $('#createlichthiModal').modal('toggle');
      this._api.get('/api/lichthis/get-by-id/'+ row.lichthi_id).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.lichthi = res;
        let malichthi = new Date(this.lichthi.malichthi);
          this.formdata = this.fb.group({
            'banglichthi': [this.lichthi.banglichthi, Validators.required],
            'malichthi': [lichthi.malichthi, Validators.required],
            'lt_malop': [this.lichthi.lt_malop],
          }, {
            validator: MustMatch('matkhau', 'nhaplaimatkhau')
          });
          this.doneSetupForm = true;
        });
    }, 700);
  }

  closeModal() {
    $('#createlichthiModal').closest('.modal').modal('hide');
  }
}
