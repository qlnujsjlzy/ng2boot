import { Component, OnInit } from '@angular/core';
import { User } from '../user/model/user-model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserLoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: 'login.template.html'
})
export class loginComponent implements OnInit {
  public user: User = new User();
  public error: Error;

  constructor(public router: Router,
              public activatedRoute: ActivatedRoute,
              public userLoginService: UserLoginService) {
    console.log(this.userLoginService);
  }

  ngOnInit() {
    console.log("--- user-login-component ---");
    console.log(this.router);
    console.log(this.activatedRoute);
  }

  public doLogin(): void {
    console.log(this.user);
    this.userLoginService.login(this.user);
  }


  public forgetPwd(): void {
    this.router.navigateByUrl("forgetpwd");
  }
}
