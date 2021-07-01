import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;
@Component({
  selector: 'app-thoikhoabieu',
  templateUrl: './tkb.component.html',
  styleUrls: ['./tkb.component.css'],
})
export class ThoikhoabieuComponent extends BaseComponent implements OnInit {
  public thoikhoabieus: any;
  public thoikhoabieu: any;
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
      'mathoikhoabieu': [''],
      'bangthoikhoabieu': [''],
      'tkb_malop': [''],
    });

   this.search();
  }

  loadPage(page) {
    this._api.post('/api/thoikhoabieus/search',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.thoikhoabieus = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }

  search() {
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/thoikhoabieus/search',{page: this.page, pageSize: this.pageSize, tenthoikhoabieu: this.formsearch.get('tenthoikhoabieu').value, taikhoan: this.formsearch.get('taikhoan').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.thoikhoabieus = res.data;
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
           mathoikhoabieu:value.tenthoikhoabieu,
           bangthoikhoabieu:value.mathoikhoabieu,
           tkb_malop:value.tkb_malop,
          };
        this._api.post('/api/thoikhoabieus/create-thoikhoabieu',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Thêm thành công');
          this.search();
          this.closeModal();
          });
      });
    } else {
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp = {
          mathoikhoabieu:value.tenthoikhoabieu,
          bangthoikhoabieu:value.mathoikhoabieu,
          tkb_malop:value.tkb_malop,
          };
        this._api.post('/api/thoikhoabieus/update-thoikhoabieu',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.closeModal();
          });
      });
    }

  }

  onDelete(row) {
    this._api.post('/api/thoikhoabieus/delete-thoikhoabieu',{thoikhoabieu_id:row.thoikhoabieu_id}).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.search();
      });
  }

  Reset() {
    this.thoikhoabieu = null;
    this.formdata = this.fb.group({
      'tenthoikhoabieu': ['', Validators.required],
      'mathoikhoabieu': ['',Validators.required],
      'tkb_malop': ['',Validators.required],
    }, {
      validator: MustMatch('matkhau', 'nhaplaimatkhau')
    });
  }

  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.thoikhoabieu = null;
    setTimeout(() => {
      $('#createthoikhoabieuModal').modal('toggle');
      this.formdata = this.fb.group({
      'tenthoikhoabieu': ['', Validators.required],
      'mathoikhoabieu': ['',Validators.required],
      'tkb_malop': ['',Validators.required],
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
      $('#createthoikhoabieuModal').modal('toggle');
      this._api.get('/api/thoikhoabieus/get-by-id/'+ row.thoikhoabieu_id).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.thoikhoabieu = res;
        let mathoikhoabieu = new Date(this.thoikhoabieu.mathoikhoabieu);
          this.formdata = this.fb.group({
            'bangthoikhoabieu': [this.thoikhoabieu.bangthoikhoabieu, Validators.required],
            'mathoikhoabieu': [thoikhoabieu.mathoikhoabieu, Validators.required],
            'tkb_malop': [this.thoikhoabieu.tkb_malop],
          }, {
            validator: MustMatch('matkhau', 'nhaplaimatkhau')
          });
          this.doneSetupForm = true;
        });
    }, 700);
  }

  closeModal() {
    $('#createthoikhoabieuModal').closest('.modal').modal('hide');
  }
}
