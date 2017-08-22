"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var template_demo_component_1 = require("./template-demo.component");
var switcher_component_1 = require("./switcher.component");
var firstInserted_component_1 = require("./firstInserted.component");
var secondInserted_component_1 = require("./secondInserted.component");
var template_demo_routes_1 = require("./template-demo.routes");
var TemplateDemoModule = (function () {
    function TemplateDemoModule() {
    }
    return TemplateDemoModule;
}());
TemplateDemoModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule.forChild(template_demo_routes_1.TemplateDemoChild)],
        exports: [template_demo_component_1.TemplateDemoComponent],
        declarations: [
            template_demo_component_1.TemplateDemoComponent,
            firstInserted_component_1.FirstInsertedComponent,
            secondInserted_component_1.SecondInsertedComponent,
            switcher_component_1.SwitcherComponent,
        ],
        providers: [],
        entryComponents: [
            firstInserted_component_1.FirstInsertedComponent,
            secondInserted_component_1.SecondInsertedComponent
        ]
    })
], TemplateDemoModule);
exports.TemplateDemoModule = TemplateDemoModule;
//# sourceMappingURL=template-demo.module.js.map