import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;
@Component({
  selector: 'app-bomon',
  templateUrl: './bomon.component.html',
  styleUrls: ['./bomon.component.css'],
})
export class BomonComponent extends BaseComponent implements OnInit {
  public bomons: any;
  public bomon: any;
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
      'tenbomon': [''],
      'taikhoan': [''],
    });

   this.search();
  }

  loadPage(page) {
    this._api.post('/api/bomons/search',{page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.bomons = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }

  search() {
    this.page = 1;
    this.pageSize = 5;
    this._api.post('/api/bomons/search',{page: this.page, pageSize: this.pageSize, tenbomon: this.formsearch.get('tenbomon').value, taikhoan: this.formsearch.get('taikhoan').value}).takeUntil(this.unsubscribe).subscribe(res => {
      this.bomons = res.data;
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
           tenbomon:value.tenbomon,
           mabomon:value.mabomon,
          };
        this._api.post('/api/bomons/create-bomon',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Thêm thành công');
          this.search();
          this.closeModal();
          });
      });
    } else {
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp = {
          tenbomon:value.tenbomon,
          mabomon:value.mabomon,
          };
        this._api.post('/api/bomons/update-bomon',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.closeModal();
          });
      });
    }

  }

  onDelete(row) {
    this._api.post('/api/bomons/delete-bomon',{bomon_id:row.bomon_id}).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.search();
      });
  }

  Reset() {
    this.bomon = null;
    this.formdata = this.fb.group({
      'tenbomon': ['', Validators.required],
      'mabomon': ['',Validators.required],
    }, {
      validator: MustMatch('matkhau', 'nhaplaimatkhau')
    });
  }

  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.bomon = null;
    setTimeout(() => {
      $('#createbomonModal').modal('toggle');
      this.formdata = this.fb.group({
      'tenbomon': ['', Validators.required],
      'mabomon': ['',Validators.required],
      }, {
        validator: MustMatch('matkhau', 'nhaplaimatkhau')
      });
    });
  }


  closeModal() {
    $('#createbomonModal').closest('.modal').modal('hide');
  }
}
