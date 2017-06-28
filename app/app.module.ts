import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule } from '@angular/forms';
import { HttpModule }      from '@angular/http';
import { RequestsModule }  from './request/requests.module';
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RequestService } from './request/request.service';
import { CourseService } from './course/course.service';
import { StateService } from './shared/state.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,
                 RequestsModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  providers:     [ RequestService, CourseService, StateService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

