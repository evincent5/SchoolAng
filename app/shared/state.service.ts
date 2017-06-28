import { Injectable } from '@angular/core';
import { Http, Response, } from '@angular/http';
import {Observable } from 'rxjs/Rx';
import {State} from '../models/state';
import '../service/rxjs-extensions';

@Injectable()
export class StateService {
    baseUrl: string = 'http://localhost:54428/api/';

    constructor(private http: Http) { }

    getState(): Promise<State[]> {
        return this.http
        .get(this.baseUrl + 'state')
        .map((res: Response) => <State[]>res.json())
        .toPromise()
        .catch(this.handleError);
    }

    getStateById(id: number): Observable<State>{
        return this.http
        .get(this.baseUrl + 'state/' + id)
        .map((res: Response) => <State>res.json())
        .catch(this.handleError);
    }

    private handleError(error : Response){
        return Observable.throw(error.json().error || 'Server error');
    }

// tslint:disable-next-line:eofline
}
