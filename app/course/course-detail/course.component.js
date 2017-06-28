"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var course_service_1 = require("../course.service");
var CourseComponent = (function () {
    function CourseComponent(route, router, courseService) {
        this.route = route;
        this.router = router;
        this.courseService = courseService;
    }
    CourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.map(function (params) { return params['id']; })
            .subscribe(function (id) { return _this.courseService.getCourseById(id)
            .subscribe(function (course) { return _this.courseDetail = course; }); });
    };
    return CourseComponent;
}());
CourseComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'course-detail',
        templateUrl: 'course.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        course_service_1.CourseService])
], CourseComponent);
exports.CourseComponent = CourseComponent;
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
//# sourceMappingURL=course.component.js.map