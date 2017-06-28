import { NgModule }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseListComponent }  from './course-list/course-list.component';
import { CourseComponent }  from './course-detail/course.component';
import { CourseNewComponent }  from './course-create/course-new.component';

const routes: Routes = [
 { path: '', component: CoursesComponent,
    children: [
            { path: '', component: CourseListComponent },
            { path: 'create', component: CourseNewComponent },
            { path: ':id', component: CourseComponent }
    ]
 }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule]
})
export class CoursesRoutingModule { }

export const routableComponents = [
    CourseComponent, CoursesComponent, CourseListComponent,
    CourseNewComponent
  ];
