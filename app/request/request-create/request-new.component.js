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
var state_service_1 = require("../../shared/state.service");
var course_service_1 = require("../../course/course.service");
var request_service_1 = require("../request.service");
var RequestNewComponent = (function () {
    function RequestNewComponent(courseService, stateService, requestService) {
        this.courseService = courseService;
        this.stateService = stateService;
        this.requestService = requestService;
        this.request = new request_1.Request();
    }
    RequestNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.getCourse()
            .subscribe(function (course) { return _this.courseArray = course; });
        this.stateService.getState()
            .then(function (state) { return _this.stateArray = state; });
    };
    RequestNewComponent.prototype.onSubmit = function () {
        var _this = this;
        this.requestService.insertRequest(this.request)
            .subscribe(function (request) { return _this.request = request; });
    };
    return RequestNewComponent;
}());
RequestNewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-request',
        templateUrl: 'request-new.component.html',
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService,
        state_service_1.StateService,
        request_service_1.RequestService])
], RequestNewComponent);
exports.RequestNewComponent = RequestNewComponent;
//# sourceMappingURL=request-new.component.js.map