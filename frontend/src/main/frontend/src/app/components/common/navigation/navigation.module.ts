import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "./navigation.component";
import { SharedModule } from '../../../views/shared/shared.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [BrowserModule, RouterModule, SharedModule],
  exports: [NavigationComponent],
})

export class NavigationModule {
}
