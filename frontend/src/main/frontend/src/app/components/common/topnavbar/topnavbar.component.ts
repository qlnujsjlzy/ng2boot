import { Component, OnInit } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';
import { Router } from '@angular/router';
import { UserLoginService } from '../../../views/login/login.service';
declare var jQuery: any;

@Component({
  selector: 'topnavbar',
  templateUrl: 'topnavbar.template.html'
})
export class TopnavbarComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(public router: Router,
              public userLoginService: UserLoginService) {
  }

  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }

  public doLogout(): void {
    this.userLoginService.logout();
    this.router.navigateByUrl("login");
  }

}
