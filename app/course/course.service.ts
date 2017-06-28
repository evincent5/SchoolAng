import { Injectable } from '@angular/core';
import { Http, Response, } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Course } from '../models/course';
import '../service/rxjs-extensions';

@Injectable()
export class CourseService {
    baseUrl: string = 'http://localhost:54428/api/';

    constructor(private http: Http) { }

    getCourse(): Observable<Course[]> {
            // getCourse() : Promise<Course[]>{

        return this.http
        .get(this.baseUrl + 'course')
        .map((res: Response) => <Course[]>res.json())
        .catch(this.handleError);
    }
    getCourseById(id: number): Observable<Course> {
        return this.http
        .get(this.baseUrl + 'course/' + id)
        .map((res: Response) => <Course>res.json())
        .catch(this.handleError);
    }

    updateCourse(id: number, course: Course)  {
        return this.http
        .put(this.baseUrl + 'course' + id, JSON.stringify(course))
        .map((res: Response) => <Course>res.json())
        .catch(this.handleError);
    }

    insertCourse(course: Course) {
        return this.http
        .post(this.baseUrl + 'course', JSON.stringify(course))
        .map((res: Response) => <Course>res.json())
        .catch(this.handleError);
    }

    deletecourse(id: number) {
        return this.http
        .delete(this.baseUrl + 'course' +id)
        .map((res: Response) => <Course>res.json())
        .catch(this.handleError);
    }

    private handleError(error : Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

}
