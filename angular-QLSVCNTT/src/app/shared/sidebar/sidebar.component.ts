import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  public menus = [
  {name :'Tài Khoản', url:'',icon:'user',childs:[{name:'Quản lý tài khoản',url:'user/user'},{name:'Đăng xuất', url:'/login'},{name:'Đăng nhập', url:'/login'}]},
  {name :'Sinh Viên', url:'',icon:'user',childs:[{name:'Quản lý sinh viên',url:'sinhvien/sinhvien'}]},
  {name :'Khóa Học', url:'',icon:'key',childs:[{name:'Thông tin khóa học',url:'user/user'}]},
  {name :'Bộ Môn', url:'',icon:'book',childs:[{name:'Thông tin bộ môn',url:'user/user'}]},
  {name :'Chuyên Ngành', url:'',icon:'book',childs:[{name:'Thông tin chuyên ngành',url:''}]},
  {name :'Lớp Học', url:'',icon:'user',childs:[{name:'Tất cả lớp học',url:'user/user'}]},
  {name :'Kết Quả Học Tập', url:'',icon:'user',childs:[{name:'Điểm',url:'ketquahoctap/ketquahoctap'}]},
  {name :'Quá Trình Học Tập', url:'',icon:'clipboard',childs:[{name:'Thông tin quá trình hoc tập',url:'user/user'}]},
  {name :'Thống Kê', url:'',icon:'signal',childs:[{name:'sinh viên xuất sắc',url:'user/user'}]},
];
  constructor() { }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    $('#sidebar-collapse').click(function () {
      setTimeout(() => {
        let event;
        if (typeof (Event) === 'function') {
          event = new Event('resize');
        } else {
          event = document.createEvent('Event');
          event.initEvent('resize', true, true);
        }
        window.dispatchEvent(event);
      }, 100);
      if (!$('#sidebar').hasClass('menu-min')) {
        $('.main-content').css('padding-left', '43px');
        $('.footer-inner').css('left', '43px');
      } else {
        $('.main-content').css('padding-left', '190px');
        $('.footer-inner').css('left', '190px');
      }
    });
    setTimeout(() => {
      let event;
      if (typeof (Event) === 'function') {
        event = new Event('resize');
      } else {
        event = document.createEvent('Event');
        event.initEvent('resize', true, true);
      }
      window.dispatchEvent(event);
    }, 100);
    setTimeout(() => {
      $('.main-content').css('padding-left', $('#sidebar').width() + 1);
      $('.footer-inner').css('left', $('#sidebar').width() + 1);
    }, 100);
  }
}
