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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by shouhua on 2016/5/22.
 */
var core_1 = require("@angular/core");
var hero_service_1 = require("../service/hero.service");
var router_1 = require("@angular/router");
var DashboardComponent = DashboardComponent_1 = (function () {
    function DashboardComponent(heroService, router, r, appRef) {
        this.heroService = heroService;
        this.router = router;
        this.appRef = appRef;
        this.heroes = [];
        this.value = r;
        //view angular version 
        console.log("Angular version is: " + core_1.VERSION.full);
        //angular compiled result
        console.log("ApplicationRef by compiled result: ");
        console.log(appRef);
        //angular metadata info
        console.log("annotations: " + Reflect.getMetadata('annotations', DashboardComponent_1));
        console.log("annotations: " + Reflect.getOwnMetadata('annotations', DashboardComponent_1));
        console.log("design:paramtypes: " + Reflect.getMetadata('design:paramtypes', DashboardComponent_1));
        console.log("propMetadata: " + Reflect.getMetadata('propMetadata', DashboardComponent_1));
        console.log("parameters: " + Reflect.getMetadata('parameters', DashboardComponent_1));
        var annotations = Reflect.getOwnMetadata('annotations', DashboardComponent_1);
        console.log(annotations);
        console.log(annotations[0]);
    }
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboardComponent.prototype.gotoDetail = function (hero) {
        console.info('inject random value in dashboard is: ' + this.value);
        var link = ['/hero', hero.id];
        this.router.navigate(link);
    };
    return DashboardComponent;
}());
DashboardComponent = DashboardComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-dashboard',
        templateUrl: 'dashboard.component.html',
        styleUrls: ['dashboard.component.css']
    }),
    __param(2, core_1.Inject('Random')),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.Router, Object, core_1.ApplicationRef])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
var DashboardComponent_1;
//# sourceMappingURL=dashboard.component.js.map