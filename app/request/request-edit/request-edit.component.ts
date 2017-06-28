import { Component, OnInit } from '@angular/core';
import {Request} from '../../models/request';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestService} from '../request.service';
import {State} from '../../models/state';
import {StateService} from '../../shared/state.service';
import {Course} from '../../models/course';
import {CourseService} from '../../course/course.service';

@Component({
  moduleId: module.id,
  selector: 'request-edit',
  templateUrl: 'request-edit.component.html',
})
export class RequestEditComponent implements OnInit {
    courseArray: Course[];
    stateArray: State[];
    requestEdit: Request = new Request();
    id: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private requestService: RequestService,
        private courseService: CourseService,
        private stateService: StateService,

        ) { }

        ngOnInit() {
        this.courseService.getCourse()
        .subscribe(course => this.courseArray = course);

        this.stateService.getState()
        .then(state => this.stateArray = state);

        this.route.params.map(params => params['id'])
        .subscribe(id => this.requestService.getRequestById(id)
        // .subscribe(id => this.requestService.updateRequest(this.id, this.requestEdit)
        .subscribe(request => this.requestEdit = request));
    }
}
