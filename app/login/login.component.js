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
/**
 * Created by shouhua on 2016/6/15.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var LoginComponent = (function () {
    function LoginComponent(http) {
        this.http = http;
    }
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.username, ":", form.password, ":", form);
        this.loading = true;
        var headers = new http_1.Headers();
        headers.append("Authorization", "Basic " + btoa("IdentityWebUI:secret"));
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("Cache-Control", "no-cache");
        var opts = new http_1.RequestOptions();
        opts.headers = headers;
        var body = 'grant_type=password&username=' + form.username + '&password=' + form.password + '&scope=openid';
        this.http.post('https://localhost/MSRDemo/core/connect/token', body, opts)
            .subscribe(function (res) {
            _this.data = res.json();
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map