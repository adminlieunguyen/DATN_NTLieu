import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;
@Component({
  selector: 'app-lophoc',
  templateUrl: './lophoc.component.html',
  styleUrls: ['./lophoc.component.css'],
})
export class LophocComponent extends BaseComponent implements OnInit {
  public lophocs: any;
  public lophoc: any;
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
      'tenlop': [''],
      'malop': [''],
      'siso': [''],
    });

   this.search();
  }

  loadPage(page) {
    this._api.post('/api/lophocs/search',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.lophocs = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }

  search() {
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/lophocs/search',{page: this.page, pageSize: this.pageSize, tenlophoc: this.formsearch.get('tenlophoc').value, taikhoan: this.formsearch.get('taikhoan').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.lophocs = res.data;
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
           tenlop:value.tenlophoc,
           malop:value.malophoc,
           siso:value.siso,
          };
        this._api.post('/api/lophocs/create-lophoc',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Thêm thành công');
          this.search();
          this.closeModal();
          });
      });
    } else {
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp = {
          tenlop:value.tenlophoc,
          malop:value.malophoc,
          siso:value.siso,
          };
        this._api.post('/api/lophocs/update-lophoc',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.closeModal();
          });
      });
    }

  }

  onDelete(row) {
    this._api.post('/api/lophocs/delete-lophoc',{lophoc_id:row.lophoc_id}).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.search();
      });
  }

  Reset() {
    this.lophoc = null;
    this.formdata = this.fb.group({
      'tenlophoc': ['', Validators.required],
      'malophoc': ['',Validators.required],
      'siso': ['',Validators.required],
    }, {
      validator: MustMatch('matkhau', 'nhaplaimatkhau')
    });
  }

  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.lophoc = null;
    setTimeout(() => {
      $('#createlophocModal').modal('toggle');
      this.formdata = this.fb.group({
      'tenlophoc': ['', Validators.required],
      'malophoc': ['',Validators.required],
      'siso': ['',Validators.required],
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
      $('#createlophocModal').modal('toggle');
      this._api.get('/api/lophocs/get-by-id/'+ row.lophoc_id).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.lophoc = res;
        let tenlop = new Date(this.lophoc.tenlop);
          this.formdata = this.fb.group({
            'malop': [this.lophoc.malop, Validators.required],
            'tenlop': [lophoc.tenlop, Validators.required],
            'siso': [this.lophoc.siso],
          }, {
            validator: MustMatch('matkhau', 'nhaplaimatkhau')
          });
          this.doneSetupForm = true;
        });
    }, 700);
  }

  closeModal() {
    $('#createlophocModal').closest('.modal').modal('hide');
  }
}
