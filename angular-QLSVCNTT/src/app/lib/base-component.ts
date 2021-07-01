import { of as observableOf, fromEvent, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileUpload } from 'primeng/fileupload';
import { ApiService } from '../lib/api.service';
import { ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';
export class BaseComponent {
   public genders: any;
   public roles: any;
   public locale_vn:any;
   public today: any;
   public dantocs: any;
   public dateFormat: any;
   public unsubscribe = new Subject();
   public _api: ApiService;
   public _route: ActivatedRoute;
   constructor(injector: Injector) {
          this.today = new Date();
          this.dateFormat = "dd/mm/yy";
          this.genders =  [
            {label:'Nam',value:'Nam'},
            {label:'Nữ',value:'Nữ'},
            {label:'Khác',value:'Khác'}
          ];
          this.roles =  [
            {label:'Admin',value:'Admin'},
            {label:'Khách',value:'Khách'},
            {label:'Giangvien',value:'GiangVien'}
          ];
          this.dantocs =  [
            {label:'Dân Tộc',value:'Dân Tộc'},
            {label:'Kinh',value:'Kinh'},
            {label:'Tày',value:'Tày'},
            {label:'Thái',value:'Thái'},
            {label:'Mường',value:'Mường'},
            {label:'Khmer',value:'Khmer'},
            {label:'Hoa',value:'Hoa'},
            {label:'Nùng',value:'Nùng'},
            {label:'H Mông',value:'H Mông'},
            {label:'Dao',value:'Dao'},
            {label:'Gia Rai',value:'Gia Rai'},
            {label:'Ê Đê',value:'Ê Đê'},
            {label:'Ba Na',value:'Ba Na'},
            {label:'Sơ Đăng',value:'Sơ Đăng'},
            {label:'Sán Chay',value:'Sán Chay'},
            {label:'Cơ Ho',value:'Cơ Ho'},
            {label:'Sán Dìu',value:'Sán Dìu'},
            {label:'Chăm',value:'Chăm'},
            {label:'Hrê',value:'Hrê'},
            {label:'Ra Glai',value:'Ra Glai'},
            {label:'M Nông',value:'M Nông'},
            {label:'Stiêng',value:'	Stiêng'},
            {label:'Bru-Vân Kiều',value:'Bru-Vân Kiều'},
            {label:'Thổ',value:'Thổ'},
            {label:'Khơ Mú',value:'Khơ Mú'},
            {label:'Cơ Tu',value:'Cơ Tu'},
            {label:'Giáy',value:'Giáy'},
            {label:'Giẻ Triêng',value:'Giẻ Triêng'},
            {label:'Tà Ôi',value:'Tà Ôi'},
            {label:'Mạ',value:'Mạ'},
            {label:'Co',value:'Co'},
            {label:'Chơ Ro',value:'Chơ Ro'},
            {label:'Xinh Mun',value:'Xinh Mun'},
            {label:'Hà Nhì',value:'Hà Nhì'},
            {label:'Chu Ru',value:'Chu Ru'},
            {label:'Lào',value:'Lào'},
            {label:'Kháng',value:'Kháng'},
            {label:'La Chí',value:'La Chí'},
            {label:'Phù Lá',value:'	Phù Lá'},
            {label:'La Hủ',value:'La Hủ'},
            {label:'La Ha',value:'La Ha'},
            {label:'Pà Thẻn',value:'Pà Thẻn'},
            {label:'Chứt',value:'Chứt'},
            {label:'Lự',value:'Lự'},
            {label:'Lô Lô',value:'Lô Lô'},
            {label:'Mảng',value:'Mảng'},
            {label:'Cờ Lao',value:'Cờ Lao'},
            {label:'Bố Y',value:'Bố Y'},
            {label:'Cống',value:'Cống'},
            {label:'Ngái',value:'Ngái'},
            {label:'Si La',value:'Si La'},
            {label:'Pu Péo',value:'Pu Péo'},
            {label:'Rơ măm',value:'Rơ măm'},
            {label:'Brâu',value:'Brâu'},
            {label:'Ơ Đu',value:'Ơ Đu'},
            {label:'Người Nước Ngoài',value:'Người Nước Ngoài'}
          ];
          this.locale_vn={
            "firstDayOfWeek": 1,
            "dayNames": [
              "Chủ nhật",
              "Thứ 2",
              "Thứ 3",
              "Thứ 4",
              "Thứ 5",
              "Thứ 6",
              "Thứ 7"
            ],
            "dayNamesShort": [
              "CN",
              "T2",
              "T3",
              "T4",
              "T5",
              "T6",
              "T7"
            ],
            "dayNamesMin": [
              "CN",
              "T2",
              "T3",
              "T4",
              "T5",
              "T6",
              "T7"
            ],
            "monthNames": [
              "Tháng 1",
              "Tháng 2",
              "Tháng 3",
              "Tháng 4",
              "Tháng 5",
              "Tháng 6",
              "Tháng 7",
              "Tháng 8",
              "Tháng 9",
              "Tháng 10",
              "Tháng 11",
              "Tháng 12"
            ],
            "monthNamesShort": [
              "Th 1",
              "Th 2",
              "Th 3",
              "Th 4",
              "Th 5",
              "Th 6",
              "Th 7",
              "Th 8",
              "Th 9",
              "Th 10",
              "Th 11",
              "Th 12"
            ],
            "today": "Hôm nay",
            "clear": "Xóa"
          };
          this._api = injector.get(ApiService);
          this._route = injector.get(ActivatedRoute);
      }
   public getEncodeFromImage(fileUpload: FileUpload) {
        if (fileUpload) {
          if (fileUpload.files == null || fileUpload.files.length == 0) {
            return observableOf('');
          }
          let file: File = fileUpload.files[0];
          let reader: FileReader = new FileReader();
          reader.readAsDataURL(file);
          return fromEvent(reader, 'load').pipe(
            map((e) => {
              let result = '';
              let tmp: any = reader.result;
              let baseCode = tmp.substring(tmp.indexOf('base64,', 0) + 7);
              result = file.name + ';' + file.size + ';' + baseCode;
              return result;
            })
          );
        } else {
          return observableOf(null);
        }
      }
}
