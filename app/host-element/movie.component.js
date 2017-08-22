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
var core_1 = require("@angular/core");
var actor_model_1 = require("../model/actor.model");
var MovieComponent = (function () {
    function MovieComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        console.log("constructor");
        this.actorLocal = new actor_model_1.Actor("localFirstName", "localLastName");
    }
    MovieComponent.prototype.ngOnInit = function () {
        this.actorLocal.firstName = "hello";
        console.log("ngOnInit");
    };
    MovieComponent.prototype.test = function () {
        // this.title = "change title";
        // this.actor.firstName = "shouhua";
        this.actorLocal.firstName = "change local first name";
    };
    return MovieComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MovieComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", actor_model_1.Actor)
], MovieComponent.prototype, "actor", void 0);
MovieComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'movie',
        template: "\n    <div>\n    <h3>{{ title }}</h3>\n    <p>\n    <label>Actor:</label>\n    <span>{{actor.firstName}} {{actor.lastName}}</span>\n    </p>\n    </div>\n    <span> {{actorLocal.firstName}}-{{actorLocal.lastName}}</span>\n    <button type=\"button\" (click)=\"test()\">testChild</button>\n    ",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], MovieComponent);
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.component.js.map