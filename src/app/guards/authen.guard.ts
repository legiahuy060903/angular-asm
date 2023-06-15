import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class authenGuard implements CanActivate {
  constructor(private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const str = localStorage.getItem("expiresIn") || "";
    if (str == "") {
      this.router.navigate(['home/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
    const expiresAt = JSON.parse(str);
    const isLogin = moment().isBefore(moment(expiresAt));
    if (isLogin) {
      return true;
    } else {
      this.router.navigate(['home/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}


