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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("../service/rxjs-extensions");
var RequestService = (function () {
    function RequestService(http) {
        this.http = http;
        this.options = new http_1.RequestOptions({
            headers: new http_1.Headers({
                'content-type': 'application/json'
            })
        });
        this.baseUrl = 'http://localhost:54428/api/';
    }
    RequestService.prototype.getRequest = function () {
        return this.http
            .get(this.baseUrl + 'request')
            .map(function (res) { return res.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    RequestService.prototype.getRequestById = function (id) {
        return this.http
            .get(this.baseUrl + 'request/' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RequestService.prototype.updateRequest = function (id, request) {
        return this.http
            .put(this.baseUrl + 'request' + id, JSON.stringify(request), this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RequestService.prototype.insertRequest = function (request) {
        return this.http
            .post(this.baseUrl + 'request', JSON.stringify(request), this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RequestService.prototype.deleteRequest = function (id) {
        return this.http
            .delete(this.baseUrl + 'request' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RequestService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    return RequestService;
}());
RequestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RequestService);
exports.RequestService = RequestService;
//# sourceMappingURL=request.service.js.map