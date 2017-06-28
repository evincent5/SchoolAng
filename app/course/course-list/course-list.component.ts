import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../course.service';

@Component({
  moduleId: module.id,
  selector: 'course-list',
  templateUrl: 'course-list.component.html'
})

export class CourseListComponent implements OnInit {
    courseList: Course[];
    constructor(private courseService: CourseService
    ) { }
            ngOnInit(){
        this.courseService.getCourse()
        .subscribe(course => this.courseList = course);
    }

    // ngOnInit(){
    //     this.courseService.getCourse()
    //     .then(courseList => this.courseList = courseList);
    // }
}
