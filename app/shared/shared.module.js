"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
//关于这种写法，是一个很复杂的故事，详情可以参见：http://blog.angular-university.io/angular2-ngmodule/
//这样是为了防止共享库会在全局范围和局部的module中依赖注入时产生2个实例，在全局的AppModule中使用import SharedModule.forRoot
//,而在局部的module中调用时直接import SharedModule
//始终保持AuthService不管在eager或者lazy loading中都是同一个实例
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [auth_service_1.AuthService]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    core_1.NgModule()
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;
//# sourceMappingURL=shared.module.js.map