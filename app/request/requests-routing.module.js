"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var requests_component_1 = require("./requests.component");
var request_list_component_1 = require("./request-list/request-list.component");
var request_component_1 = require("./request-detail/request.component");
var request_new_component_1 = require("./request-create/request-new.component");
var request_edit_component_1 = require("./request-edit/request-edit.component");
var routes = [
    { path: 'requests',
        component: requests_component_1.RequestsComponent,
        children: [
            { path: '', component: request_list_component_1.RequestListComponent },
            { path: 'create', component: request_new_component_1.RequestNewComponent },
            { path: 'edit/:id', component: request_edit_component_1.RequestEditComponent },
            { path: ':id', component: request_component_1.RequestComponent }
        ]
    },
];
var RequestsRoutingModule = (function () {
    function RequestsRoutingModule() {
    }
    return RequestsRoutingModule;
}());
RequestsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], RequestsRoutingModule);
exports.RequestsRoutingModule = RequestsRoutingModule;
exports.routableComponents = [
    request_component_1.RequestComponent, requests_component_1.RequestsComponent,
    request_list_component_1.RequestListComponent, request_edit_component_1.RequestEditComponent,
    request_new_component_1.RequestNewComponent
];
// tslint:disable-next-line:no-trailing-whitespace
//# sourceMappingURL=requests-routing.module.js.map