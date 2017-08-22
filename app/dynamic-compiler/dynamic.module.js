"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var detail_component_1 = require("./detail.component");
var type_builder_1 = require("./type.builder");
var template_builder_1 = require("./template.builder");
// parts module
var parts_module_1 = require("./parts/parts.module");
var DynamicModule = DynamicModule_1 = (function () {
    function DynamicModule() {
    }
    DynamicModule.forRoot = function () {
        return {
            ngModule: DynamicModule_1,
            providers: [
                template_builder_1.DynamicTemplateBuilder,
                type_builder_1.DynamicTypeBuilder
            ]
        };
    };
    return DynamicModule;
}());
DynamicModule = DynamicModule_1 = __decorate([
    core_1.NgModule({
        imports: [parts_module_1.PartsModule],
        exports: [detail_component_1.DynamicDetail],
        declarations: [detail_component_1.DynamicDetail],
    })
], DynamicModule);
exports.DynamicModule = DynamicModule;
var DynamicModule_1;
//# sourceMappingURL=dynamic.module.js.map