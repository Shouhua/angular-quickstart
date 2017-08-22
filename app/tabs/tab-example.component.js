"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TabExample = (function () {
    function TabExample() {
    }
    return TabExample;
}());
TabExample = __decorate([
    core_1.Component({
        selector: 'tab-example',
        //pipes:[TitleCasePipe],
        template: "\n    <tabs>\n    <tab [tabTitle]=\"'Tab 1'\">{{\"hello world\"|titleCase}}</tab>\n    <tab tabTitle=\"Tab 2\">tab222222</tab>\n</tabs>\n"
    })
], TabExample);
exports.TabExample = TabExample;
//# sourceMappingURL=tab-example.component.js.map