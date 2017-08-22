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
 * Created by shouhua on 2016/7/5.
 */
var core_1 = require("@angular/core");
var tab2_component_1 = require("./tab2.component");
var Tabs2 = (function () {
    function Tabs2() {
    }
    Tabs2.prototype.ngAfterContentInit = function () {
        console.log("****** In ngAfterContentInit ******");
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    Tabs2.prototype.ngAfterViewInit = function () {
        console.log("****** In ngAfterViewInit ******");
    };
    Tabs2.prototype.selectTab = function (tab) {
        this.tabs.toArray().forEach(function (t) {
            t.active = false;
        });
        tab.active = true;
    };
    return Tabs2;
}());
__decorate([
    core_1.ContentChildren(tab2_component_1.Tab2) //ContentChildren指的是ng-content中的内容，还有ViewChildren
    ,
    __metadata("design:type", core_1.QueryList)
], Tabs2.prototype, "tabs", void 0);
Tabs2 = __decorate([
    core_1.Component({
        selector: 'tabs2',
        template: "\n        <ul class=\"nav nav-tabs\">\n        <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\n        <a href=\"javascript:void(0)\">{{tab.tabTitle}}</a>\n</li>\n</ul>\n<ng-content></ng-content>\n"
    })
], Tabs2);
exports.Tabs2 = Tabs2;
//# sourceMappingURL=tabs2.component.js.map