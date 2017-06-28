import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule } from '@angular/forms';
import {CoursesRoutingModule, routableComponents} from './courses-routing.module';
import {CourseService} from './course.service';

@NgModule({
  imports:      [ CommonModule, FormsModule, CoursesRoutingModule  ],
  declarations: [ routableComponents ],
  providers:     [ CourseService],
})
export class CoursesModule { }
