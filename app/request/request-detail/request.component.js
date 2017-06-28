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
var request_service_1 = require("../request.service");
var RequestComponent = (function () {
    function RequestComponent(route, router, requestService) {
        this.route = route;
        this.router = router;
        this.requestService = requestService;
    }
    RequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.map(function (params) { return params['id']; })
            .subscribe(function (id) { return _this.requestService.getRequestById(id)
            .subscribe(function (request) { return _this.requestDetail = request; }); });
    };
    return RequestComponent;
}());
RequestComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'request-detail',
        templateUrl: 'request.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        request_service_1.RequestService])
], RequestComponent);
exports.RequestComponent = RequestComponent;
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
//# sourceMappingURL=request.component.js.map