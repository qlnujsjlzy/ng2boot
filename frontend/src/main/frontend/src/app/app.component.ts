import { correctHeight, detectBody } from './app.helpers';
import { Component, HostListener, ElementRef, Renderer, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/merge';
import { User } from './views/user/model/user-model';
import { UserLoginService } from './views/login/login.service';
import { UserRegisterService } from './views/register/register.service';
import { TranslateService } from '@ngx-translate/core';

// import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentUser: User;
  private globalClickCallbackFn: Function;
  private loginSuccessCallbackFn: Function;

  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    public userLoginService: UserLoginService,
    public userRegisterService: UserRegisterService,
    // public toastr: ToastsManager,
    public vcr: ViewContainerRef
  ) {
    // this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'click', (event: any) => {
      console.log("全局监听点击事件>" + event);
    });

    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    this.userLoginService.currentUser
      .merge(this.userRegisterService.currentUser)
      .subscribe(
        data => {
          this.currentUser = data;
          let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
          let routerState: RouterState = this.router.routerState;
          let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

          console.log(activatedRouteSnapshot);
          console.log(routerState);
          console.log(routerStateSnapshot);

          //如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
          if (routerStateSnapshot.url.indexOf("/login") != -1) {
            // console.log("login 拦截");
            this.router.navigateByUrl("mainView");
          }
        },
        error => console.error(error)
      );

    this.translate.addLangs(["zh", "en"]);
    this.translate.setDefaultLang('zh');

    const browserLang = this.translate.getBrowserLang();
    console.log("检测到的浏览器语言>" + browserLang);
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }

  ngOnDestroy() {
    if (this.globalClickCallbackFn) {
      this.globalClickCallbackFn();
    }
  }

  toggle(button: any) {
    console.log(button);
  }

  public doLogout(): void {
    this.userLoginService.logout();
    // this.toastr.success('退出成功！','系统提示');
    this.router.navigateByUrl("");
  }




  ngAfterViewInit() {
    // Run correctHeight function on load and resize window event
    jQuery(window).bind("load resize", function() {
      correctHeight();
      detectBody();
    });

    // Correct height of wrapper after metisMenu animation.
    jQuery('.metismenu a').click(() => {
      setTimeout(() => {
        correctHeight();
      }, 300)
    });
  }

}
