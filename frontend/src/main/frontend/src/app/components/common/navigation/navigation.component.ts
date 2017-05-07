import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../views/user/model/user-model';


@Component({
  selector: 'navigation',
  templateUrl: 'navigation.template.html'
})

export class NavigationComponent implements OnInit {
  public currentUser: User;

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  constructor(private router: Router) {
  }

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();
  }

  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }


}
