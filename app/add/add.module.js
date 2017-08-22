"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var parent_component_1 = require("./parent.component");
var child_component_1 = require("./child/child.component");
var add_routes_1 = require("./add.routes");
//feature module
var AddModule = (function () {
    function AddModule() {
    }
    return AddModule;
}());
AddModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(add_routes_1.AddRoutesChild)],
        exports: [parent_component_1.ParentComponent],
        declarations: [parent_component_1.ParentComponent, child_component_1.ChildComponent],
        entryComponents: [child_component_1.ChildComponent]
    })
], AddModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddModule;
//# sourceMappingURL=add.module.js.map