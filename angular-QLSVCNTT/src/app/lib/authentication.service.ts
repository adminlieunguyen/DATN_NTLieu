import { Giangvien } from './../models/giangvien';
import { Sinhvien } from './../models/sinhvien';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    private sinhvienSubject : BehaviorSubject<Sinhvien>;
    public sinhvien : Observable<Sinhvien>;
    private giangvienSubject : BehaviorSubject<Giangvien>;
    public giangvien : Observable<Giangvien>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
        this.sinhvienSubject = new BehaviorSubject<Sinhvien>(JSON.parse(localStorage.getItem('MaSinhvien')));
        this.sinhvien = this.sinhvienSubject.asObservable();
        this.giangvienSubject = new BehaviorSubject<Giangvien>(JSON.parse(localStorage.getItem('MaGiangvien')));
        this.giangvien = this.giangvienSubject.asObservable();
    }
   //-------------------------------------USER---------------------------------------------------------------//
    public get userValue(): User {
        return this.userSubject.value;
    }
    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/api/users/authenticate`, { username, password })
            .pipe(map(user => {
                debugger;
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
    remove() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
    }

    //-------------------------------------GIANG VIEN---------------------------------------------------------------//
    public get giangvienValue(): Giangvien {
      return this.giangvienSubject.value;

    }
    logingiangvien(MaGiangvien: string, Matkhau: string) {
        return this.http.post<any>(`${environment.apiUrl}/api/giangviens/authenticate`, { MaGiangvien, Matkhau })
            .pipe(map(giangvien => {
                debugger;
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('giangvien', JSON.stringify(giangvien));
                this.giangvienSubject.next(giangvien);
                return giangvien;
            }));
      }
    logoutgiangvien() {
      // remove user from local storage to log user out
      localStorage.removeItem('giangvien');
      this.giangvienSubject.next(null);
      this.router.navigate(['/login']);
    }
    removegiangvien() {
      // remove user from local storage to log user out
      localStorage.removeItem('giangvien');
      this.giangvienSubject.next(null);
    }
//-------------------------------------SINH VIEN---------------------------------------------------------------//

     public get sinhvienValue(): Sinhvien {
        return this.sinhvienSubject.value;

      }
      loginsinhvien(MaSinhvien: string, Matkhau: string) {
        return this.http.post<any>(`${environment.apiUrl}/api/sinhviens/authenticate`, { MaSinhvien, Matkhau })
            .pipe(map(sinhvien => {
                debugger;
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('sinhvien', JSON.stringify(sinhvien));
                this.sinhvienSubject.next(sinhvien);
                return sinhvien;
            }));
      }
      logoutsinhvien() {
        // remove user from local storage to log user out
        localStorage.removeItem('sinhvien');
        this.sinhvienSubject.next(null);
        this.router.navigate(['/login']);
      }
      removesinhvien() {
        // remove user from local storage to log user out
        localStorage.removeItem('sinhvien');
        this.sinhvienSubject.next(null);
      }

}
