import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { blankComponent } from './blank.component';
import { basicComponent } from './basic.component';
import { NavigationModule } from '../navigation/navigation.module';
import { TopnavbarModule } from '../topnavbar/topnavbar.module';
import { FooterModule } from '../footer/footer.module';
import { SharedModule } from '../../../views/shared/shared.module';
import { OpenComponent } from './open.component';

@NgModule({
  declarations: [
    blankComponent,
    basicComponent,
    OpenComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    NavigationModule,
    TopnavbarModule,
    FooterModule
  ],
  exports: [
    blankComponent,
    basicComponent,
    OpenComponent
  ]
})

export class LayoutsModule {
}
