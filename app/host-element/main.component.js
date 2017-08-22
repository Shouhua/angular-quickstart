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
var MainComponent = (function () {
    function MainComponent(changeDetectionRef) {
        this.changeDetectionRef = changeDetectionRef;
        this.slogan = 'Just movie information';
        this.title = 'Termination 1';
        this.actor = new actor_model_1.Actor('Arnold', 'Schwarzenegger');
    }
    MainComponent.prototype.changeActorProperties = function () {
        this.actor.firstName = 'Nicholas';
        this.actor.lastName = 'Cage';
        //this.changeDetectionRef.detectChanges();
    };
    MainComponent.prototype.changeActorObject = function () {
        this.actor = new actor_model_1.Actor('Bruce', 'Li');
    };
    MainComponent.prototype.test = function () {
        alert("just for test!");
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'main1',
        template: "\n    <h1>MovieApp</h1>\n    <p>{{ slogan }}</p>\n    <button type=\"button\" (click)=\"changeActorProperties()\">Change Actor Properties</button>\n    <button type=\"button\" (click)=\"changeActorObject()\">Change Actor Object</button>\n    <div [ngStyle]=\"{'border':'1px solid black'}\">\n    <movie [title]=\"title\" [actor]=\"actor\"></movie>\n    <button type=\"button\" (click)=\"test()\">test</button>\n    </div>\n    ",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
], MainComponent);
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map