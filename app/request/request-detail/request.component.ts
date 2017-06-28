import { Component, OnInit } from '@angular/core';
import { Request } from '../../models/request';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';

@Component({
  moduleId: module.id,
  selector: 'request-detail',
  templateUrl: 'request.component.html',
})
export class RequestComponent implements OnInit {
      requestDetail: Request;
      id: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private requestService: RequestService,

        ) { }
        ngOnInit() {
        this.route.params.map(params => params['id'])
        .subscribe(id => this.requestService.getRequestById(id)

        .subscribe(request => this.requestDetail = request));
        }
}
    //     ngOnInit(){
    //     this.route.params.map(params => params['id'])
    //     .do(id => this.id = id)
    //     .subscribe(id => this.http
    //     .get('http://localhost:54428/api/request/'+ this.id).map(res => res.json())
    //     .subscribe(requestDetail => this.requestDetail = requestDetail));
    // }


 // ngOnInit(){
    //     this.route.params.map(params => params['id'])
    //     .do(id => this.id = +id)
    //     .subscribe(id => this.getDetails());
    // }
    // getDetails(){
    //     return this.http.get('http://localhost:54428/api/request/'+ this.id).map(res => res.json());
    // }
