"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by shouhua on 2016/8/10.
 */
var core_1 = require("@angular/core");
var compiler_1 = require("@angular/compiler");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var myresolver_resolver_1 = require("./service/myresolver.resolver");
var dynamic_module_1 = require("./dynamic-compiler/dynamic.module");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var hero_service_1 = require("./service/hero.service");
var app_declarations_1 = require("./app.declarations");
//enableProdMode();
//这里可以利用spread operator增加可读性，另外新建文件
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(app_routes_1.routes),
            forms_1.FormsModule,
            http_1.HttpModule,
            dynamic_module_1.DynamicModule.forRoot(),
        ],
        declarations: app_declarations_1.Declarations.slice(),
        bootstrap: [app_component_1.AppComponent],
        providers: [hero_service_1.HeroService, myresolver_resolver_1.MyResolver, { provide: 'Random', useValue: Math.random() },
            compiler_1.COMPILER_PROVIDERS
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map