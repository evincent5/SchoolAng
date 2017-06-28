import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {Request} from '../../models/request';
import {Course} from '../../models/course';
import {State} from '../../models/state';
import {StateService} from '../../shared/state.service';
import {CourseService} from '../../course/course.service';
import {RequestService} from '../request.service';


@Component({
    moduleId: module.id,
    selector: 'my-request',
    templateUrl: 'request-new.component.html',
})

export class RequestNewComponent implements OnInit {
        request: Request = new Request();
        courseArray: Course[];
        stateArray: State[];
        constructor(private courseService: CourseService,
                    private stateService: StateService,
                    private requestService: RequestService

    ) { }
            ngOnInit() {
        this.courseService.getCourse()
        .subscribe(course => this.courseArray = course);

        this.stateService.getState()
        .then(state => this.stateArray = state);
    }
    onSubmit(){
        this.requestService.insertRequest(this.request)
        // this.request = new Request();
        .subscribe(request => this.request = request);
    }
      //     stateArray= [
      //     {Id: 1, StateName:'101'},
      //     {Id: 3, CourseTitle: '102'},
      //     {Id: 6, CourseTitle: '201'},
      // ];

// tslint:disable-next-line:no-trailing-whitespace
}
