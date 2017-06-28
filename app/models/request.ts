import {Course} from './course';
export class Request {
    Id: number;
    FirstName: string;
    LastName: string;
    PhoneNumber: string;
    City: string;
    StateId: number;
    EmailAddress: string;
    Courses: Course[];
}
