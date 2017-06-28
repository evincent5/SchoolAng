import { Component, OnInit } from '@angular/core';
import { Request } from '../../models/request';
import { RequestService } from '../request.service';

@Component({
  moduleId: module.id,
  selector: 'request-list',
  templateUrl: 'request-list.component.html',
})
export class RequestListComponent implements OnInit {
    requestList: Request[];
    constructor(private requestService : RequestService,
    ) { }

    ngOnInit() {
        this.requestService.getRequest()
        .then(requestList => this.requestList = requestList);
    }
}
