import { NgModule } from '@angular/core';
import { ErrorComponent } from './error.component';
import { SharedModule } from '../../../views/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, SharedModule],
  declarations: [ErrorComponent]
})
export class ErrorModule { }
