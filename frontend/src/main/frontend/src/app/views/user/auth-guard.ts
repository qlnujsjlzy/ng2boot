import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserLoginService } from '../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              public userLoginService: UserLoginService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //这里可以调用真实的服务进行验证
    this.userLoginService.currentUser
      .subscribe(
        data => {
          console.log("canActivate======" + data);
        },
        error => {
          console.error(error);
        }
      );
    console.log("currentUser===" + localStorage.getItem("currentUser"));
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
