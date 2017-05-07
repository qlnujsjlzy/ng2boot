import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports:[
  	CommonModule,
    FormsModule,
    ReactiveFormsModule,
  	TranslateModule
  ],
  declarations:[
  ],
  exports:[
  	CommonModule,
  	FormsModule,
    TranslateModule,
  ]
})

export class SharedModule {

}
