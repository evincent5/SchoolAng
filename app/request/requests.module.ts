import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule } from '@angular/forms';
import {RequestsRoutingModule, routableComponents} from './requests-routing.module';

@NgModule({
  imports:      [ CommonModule, FormsModule, RequestsRoutingModule  ],
  declarations: [ routableComponents ],
  providers:     [ ],
})
export class RequestsModule { }
