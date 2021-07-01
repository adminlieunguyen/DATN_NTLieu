import { MustMatch } from '../../../helpers/must-match.validator';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from '../../../lib/base-component';
import 'rxjs/add/operator/takeUntil';
declare var $: any;
@Component({
  selector: 'app-diem',
  templateUrl:'./ketquahoctap.component.html',
  styleUrls: ['./ketquahoctap.component.css'],
})
export class ketquahoctapComponent extends BaseComponent implements OnInit {
  public ketquahoctaps: any;
  public ketquahoctap: any;
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
  submitted = false;
  @ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(private fb: FormBuilder, injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.formsearch = this.fb.group({
      'Masv': ['']
    });

   this.search();
  }

  loadPage(page) {
    this._api.post('/api/diems/search-Diem',{pageIndex: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.ketquahoctaps = res.data;
      this.totalRecords =  res.totalItems;
      this.pageSize = res.pageSize;
      });
  }

  search() {
       this.pageIndex = 1;
       this.pageSize = 5;
       this._api.post('/api/diems/search-Diem',{pageIndex: this.pageIndex, pageSize: this.pageSize, Masv: this.formsearch.get('Masv').valuee}).takeUntil(this.unsubscribe).subscribe(res => {
       this.ketquahoctaps = res.data;
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
        let tmp = {
           
            MaDiem      : value.maDiem,
            D_MaMH      : value.d_MaMH,
            Diem       : value.diem,
            Masv       : value.masv,
           
          };
          this._api.post('/api/diems/create-Diem',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Thêm điểm thành công');
          this.search();
          this.CloseDiemModal();
        });
    }    
    else {
        let tmp;
          tmp = {
            MaDiem      : value.maDiem,
            D_MaMH      : value.d_MaMH,
            Diem       : value.diem,
            Masv       : this.ketquahoctap.masv,
            };
        this._api.post('/api/diems/update-Diem',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.search();
          this.CloseDiemModal();
        });
    }
  }


  DeleteDiemModal(row) {
    this._api.post('/api/diems/delete-Diem',{MaDiem:row.maDiem}).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.search();
      });
  }

//  public ketquaht(row){
//     this.doneSetupForm = false;
//     this.showDetailModal=true;
//     setTimeout(() => {
//     $('#DetailModal').modal('toggle');
    
//     this._api.get('/api/ketquahoctaps/get-by-kqht/'+ row.maketquahoctap).takeUntil(this.unsubscribe).subscribe(res => {
//       this.ketquahoctap=res;
//       this.doneSetupForm = true;
//     });
    
//     this._api.get('/api/ketquahoctaps/get-by-listkqht/'+ row.maketquahoctap).takeUntil(this.unsubscribe).subscribe(res => {
//       this.kq=res;
//       this.doneSetupForm = true;
//     });

//     this._api.get('/api/ketquahoctaps/get-diemtbc/'+ row.maketquahoctap).takeUntil(this.unsubscribe).subscribe(res => {
//       this.dtb=res;
//       this.doneSetupForm = true;
//     });
//   });
// }


  Reset() {
    this.ketquahoctap = null;
    this.formdata = this.fb.group({
      'maDiem' : ['',Validators.required],
      'd_MaMH': ['', Validators.required],
      'diem'  : ['',Validators.required],
      'masv'       : ['',Validators.required],
    });
  }

  ThemDiemModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.ketquahoctap = null;
    setTimeout(() => {
      $('#ThemDiemModal').modal('toggle');
      this.formdata = this.fb.group({
        'maDiem' : ['',Validators.required],
        'd_MaMH': ['', Validators.required],
        'diem'  : ['',Validators.required],
        'masv'       : ['',Validators.required],
      });
      this.doneSetupForm = true;
    });
  }


  public UpdateDiemModal(row) {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = false;
    setTimeout(() => {
      $('#ThemDiemModal').modal('toggle');
      this._api.get('/api/diems/get-by-id/'+ row.maDiem).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.ketquahoctap = res;
        this.formdata = this.fb.group({
          
          'maDiem' : ['', this.ketquahoctap.maDiem,Validators.required],
          'd_MaMH': ['',this.ketquahoctap.d_maMH, Validators.required],
          'diem'  : ['',this.ketquahoctap.diem,Validators.required],
          'masv'       : ['',this.ketquahoctap.masv,Validators.required],

          });
          this.doneSetupForm = true;
        });
    }, 700);
  }

  CloseDiemModal() {
    $('#ThemDiemModal').closest('.modal').modal('hide');
  }
  

}
