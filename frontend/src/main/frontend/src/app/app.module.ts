import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ROUTES } from "./app.routes";
import { AppComponent } from './app.component';
// App views
import { MainViewModule } from "./views/main-view/main-view.module";
import { MinorViewModule } from "./views/minor-view/minor-view.module";
import { LoginModule } from "./views/login/login.module";
import { RegisterModule } from "./views/register/register.module";

import { ChartComponent } from './views/chart/chart.component';
import { EChartOptionDirective1 } from './views/chart/echart-option.directive';
import { ChartTestComponent } from './views/chart/chart-test/chart-test.component';

// App modules/components
import { LayoutsModule } from "./components/common/layouts/layouts.module";
import { SharedModule } from './views/shared/shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserLoginService } from './views/login/login.service';
import { UserRegisterService } from './views/register/register.service';
import { LandingComponent } from './views/landing/landing.component';
import { LandingModule } from './views/landing/landing.module';
import { ErrorComponent } from './components/common/error/error.component';
import { ErrorModule } from './components/common/error/error.module';
import { AuthGuard } from './views/user/auth-guard';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    EChartOptionDirective1,
    ChartComponent,
    ChartTestComponent,

  ],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    // Views
    ErrorModule,
    MainViewModule,
    MinorViewModule,
    LoginModule,
    RegisterModule,
    LandingModule,

    // Modules
    LayoutsModule,

    SharedModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    UserLoginService,
    UserRegisterService,
    AuthGuard,
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
