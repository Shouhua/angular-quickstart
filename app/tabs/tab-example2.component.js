"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by shouhua on 2016/7/5.
 */
var core_1 = require("@angular/core");
var TabExample2 = (function () {
    function TabExample2() {
    }
    return TabExample2;
}());
TabExample2 = __decorate([
    core_1.Component({
        selector: 'tab-example',
        template: "\n        <tabs2>\n            <tab2 [tabTitle]=\"'Tab 1'\">tab1 test</tab2>\n            <tab2 tabTitle=\"Tab 2\">tab2 test</tab2>\n        </tabs2>\n"
    })
], TabExample2);
exports.TabExample2 = TabExample2;
//# sourceMappingURL=tab-example2.component.js.map