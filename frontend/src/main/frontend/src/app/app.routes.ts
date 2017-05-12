import { Routes } from '@angular/router';
import { mainViewComponent } from './views/main-view/main-view.component';
import { minorViewComponent } from './views/minor-view/minor-view.component';
import { loginComponent } from './views/login/login.component';
import { registerComponent } from './views/register/register.component';
import { blankComponent } from './components/common/layouts/blank.component';
import { basicComponent } from './components/common/layouts/basic.component';
import { ChartComponent } from './views/chart/chart.component';
import { LandingComponent } from './views/landing/landing.component';
import { ErrorComponent } from './components/common/error/error.component';
import { OpenComponent } from './components/common/layouts/open.component';
import { AuthGuard } from './views/user/auth-guard';


export const ROUTES: Routes = [
  // Main redirect
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  // App views
  {
    path: '', component: basicComponent,
    children: [
      {
        path: 'mainView',
        component: mainViewComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'minorView',
        component: minorViewComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'chart',
        component: ChartComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: '', component: blankComponent,
    children: [
      {path: 'login', component: loginComponent},
      {path: 'register', component: registerComponent}
    ]
  },
  {
    path: '', component: OpenComponent,
    children: [
      {path: 'landing', component: LandingComponent},
    ]
  },
  // Handle all other routes
  {path: '**', component: ErrorComponent}
];
