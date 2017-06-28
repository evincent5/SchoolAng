import { Component } from '@angular/core';
import {Course} from '../../models/course';

@Component({
    moduleId: module.id,
    selector: 'my-course',
    templateUrl: 'course-new.component.html'
})
export class CourseNewComponent {
    course: Course = new Course();
}
