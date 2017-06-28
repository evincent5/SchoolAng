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
var request_1 = require("../../models/request");
var router_1 = require("@angular/router");
var request_service_1 = require("../request.service");
var state_service_1 = require("../../shared/state.service");
var course_service_1 = require("../../course/course.service");
var RequestEditComponent = (function () {
    function RequestEditComponent(route, router, requestService, courseService, stateService) {
        this.route = route;
        this.router = router;
        this.requestService = requestService;
        this.courseService = courseService;
        this.stateService = stateService;
        this.requestEdit = new request_1.Request();
    }
    RequestEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getCourse()
            .subscribe(function (course) { return _this.courseArray = course; });
        this.stateService.getState()
            .then(function (state) { return _this.stateArray = state; });
        this.route.params.map(function (params) { return params['id']; })
            .subscribe(function (id) { return _this.requestService.getRequestById(id)
            .subscribe(function (request) { return _this.requestEdit = request; }); });
    };
    return RequestEditComponent;
}());
RequestEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'request-edit',
        templateUrl: 'request-edit.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        request_service_1.RequestService,
        course_service_1.CourseService,
        state_service_1.StateService])
], RequestEditComponent);
exports.RequestEditComponent = RequestEditComponent;
//# sourceMappingURL=request-edit.component.js.map