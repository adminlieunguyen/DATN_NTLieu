import { Role } from './../models/role';
import { Giangvien } from './../models/giangvien';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authenticationService.userValue;
        if (user) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    canActivatesinhvien(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const sinhvien = this.authenticationService.sinhvienValue;
      if (sinhvien) {
          return true;
      }
       // not logged in so redirect to login page with the return url
       this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
       return false;
    }


    canActivategianghvien(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const giangvien = this.authenticationService.giangvienValue;
        if (giangvien) {
            return true;
        }
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
   }
}

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const user = this.authenticationService.userValue;
        if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
            this.router.navigate(['/unauthorized']);
            return false;
        }
        return true;
    }

    svcanActivate(route: ActivatedRouteSnapshot) {
      const sinhvien = this.authenticationService.sinhvienValue;
      if (route.data.roles && route.data.roles.indexOf(sinhvien.role) === -1) {
          this.router.navigate(['/unauthorized']);
          return false;
      }
      return true;
    }


}
