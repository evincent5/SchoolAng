import { Component, OnInit } from '@angular/core';
import {Course} from '../../models/Course';
import {ActivatedRoute, Router } from '@angular/router';
import {CourseService} from '../course.service';

@Component({
  moduleId: module.id,
  selector: 'course-detail',
  templateUrl: 'course.component.html',
})
export class CourseComponent implements OnInit {
    courseDetail: Course;
    id: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private courseService: CourseService
        ) { }
        ngOnInit() {
        this.route.params.map(params => params['id'])
        .subscribe(id => this.courseService.getCourseById(id)
        .subscribe(course => this.courseDetail = course));
    }
}

    //     ngOnInit(){
    //     this.route.params.map(params => params['Id'])
    //     .do(Id => this.Id = Id)
    //     .subscribe(Id => this.http
    //     .get('http://localhost:54428/api/course/'+ this.Id).map(res => res.json())
    //     .subscribe(courseDetail => this.courseDetail = courseDetail));
    //     }
    // }


//  ngOnInit(){
//         this.route.params.map(params => params['Id'])
//         .do(Id => this.Id = +Id)
//         .subscribe(Id => this.getDetails());
//     }
//     getDetails(){
//         return this.http.get('http://localhost:54428/api/course/'+ this.Id).map(res => res.json());
//     }
// }
