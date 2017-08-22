"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by shouhua on 2016/8/12.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common"); //包括很多公用的命令，模板，管道等，例如ngIf
var heroes_component_1 = require("./heroes.component");
var heroes_routing_1 = require("./heroes.routing");
var HeroesModule = (function () {
    function HeroesModule() {
    }
    return HeroesModule;
}());
HeroesModule = __decorate([
    core_1.NgModule({
        declarations: [heroes_component_1.HeroesComponent],
        //必须声明为exports，不然引用不了，因为有可能，heroesComponent是供这个module内部使用的
        //当然，也可以直接exports，而不declarations，这样内部就引用不了了
        imports: [common_1.CommonModule, heroes_routing_1.routing],
        exports: [heroes_component_1.HeroesComponent]
    })
], HeroesModule);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeroesModule;
//# sourceMappingURL=heroes.module.js.map