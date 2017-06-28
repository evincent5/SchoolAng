"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var requests_routing_module_1 = require("./requests-routing.module");
var RequestsModule = (function () {
    function RequestsModule() {
    }
    return RequestsModule;
}());
RequestsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, requests_routing_module_1.RequestsRoutingModule],
        declarations: [requests_routing_module_1.routableComponents],
        providers: [],
    })
], RequestsModule);
exports.RequestsModule = RequestsModule;
//# sourceMappingURL=requests.module.js.map