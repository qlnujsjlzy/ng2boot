import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { loginComponent } from "./login.component";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [loginComponent],
  imports: [BrowserModule, SharedModule],
})

export class LoginModule {
}
