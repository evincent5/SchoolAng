import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {Observable } from 'rxjs/Rx';
import {Request} from '../models/request';
import '../service/rxjs-extensions';


@Injectable()

export class RequestService {
      options = new RequestOptions({
          headers: new Headers({
         'content-type': 'application/json'
          })
     });

    baseUrl: string = 'http://localhost:54428/api/';
    constructor(private http: Http) { }
    getRequest(): Promise<Request[]> {
        return this.http
        .get(this.baseUrl + 'request')
        .map((res: Response) => <Request[]>res.json())
        .toPromise()
        .catch(this.handleError);
    }
    getRequestById(id: number): Observable<Request> {
        return this.http
        .get(this.baseUrl + 'request/' + id)
        .map((res: Response) => <Request>res.json())
        .catch(this.handleError);
    }

    updateRequest(id: number, request: Request) {
        return this.http
        .put(this.baseUrl + 'request' + id, JSON.stringify(request), this.options)
        .map((res: Response) => <Request>res.json())
        .catch(this.handleError);
    }

    insertRequest(request: Request) {
      return this.http
        .post(this.baseUrl + 'request', JSON.stringify(request), this.options)
        .map((res: Response) => <Request>res.json())
        .catch(this.handleError);
    }

    deleteRequest(id: number){
        return this.http
        .delete(this.baseUrl + 'request' + id)
        .map((res: Response) => <Request>res.json())
        .catch(this.handleError);
    }

    private handleError(error: Response){
        return Observable.throw(error.json().error || 'Server error');
    }
}
