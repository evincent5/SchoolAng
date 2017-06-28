"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var courses_component_1 = require("./courses.component");
var course_list_component_1 = require("./course-list/course-list.component");
var course_component_1 = require("./course-detail/course.component");
var course_new_component_1 = require("./course-create/course-new.component");
var routes = [
    { path: '', component: courses_component_1.CoursesComponent,
        children: [
            { path: '', component: course_list_component_1.CourseListComponent },
            { path: 'create', component: course_new_component_1.CourseNewComponent },
            { path: ':id', component: course_component_1.CourseComponent }
        ]
    }
];
var CoursesRoutingModule = (function () {
    function CoursesRoutingModule() {
    }
    return CoursesRoutingModule;
}());
CoursesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], CoursesRoutingModule);
exports.CoursesRoutingModule = CoursesRoutingModule;
exports.routableComponents = [
    course_component_1.CourseComponent, courses_component_1.CoursesComponent, course_list_component_1.CourseListComponent,
    course_new_component_1.CourseNewComponent
];
//# sourceMappingURL=courses-routing.module.js.map