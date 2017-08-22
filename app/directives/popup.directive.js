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
var PopupDirective = (function () {
    function PopupDirective(_elementRef) {
        console.log(_elementRef);
    }
    PopupDirective.prototype.onclick = function (btn) {
        console.log("button", btn, "message", this.message);
    };
    return PopupDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PopupDirective.prototype, "message", void 0);
__decorate([
    core_1.HostListener('click', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PopupDirective.prototype, "onclick", null);
PopupDirective = __decorate([
    core_1.Directive({
        selector: '[popup]',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], PopupDirective);
exports.PopupDirective = PopupDirective;
//# sourceMappingURL=popup.directive.js.map