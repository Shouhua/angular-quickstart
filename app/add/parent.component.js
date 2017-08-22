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
var core_1 = require("@angular/core");
var child_component_1 = require("./child/child.component");
var ParentComponent = (function () {
    function ParentComponent(componentFactoryResolver, viewContainerRef, r) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.value = r;
    }
    ParentComponent.prototype.addComp = function () {
        console.info('Inject random value is: ' + this.value);
        console.log(this.comp);
        var factory = this.componentFactoryResolver.resolveComponentFactory(child_component_1.ChildComponent);
        //ref : ComponentRef
        var ref = this.viewContainerRef.createComponent(factory);
        //ref.instance is child Component ref instance
        ref.instance.name = { id: this.comp }; //给动态新建的component传递参数
        //ref.changeDetectRef : ChildComponent.ParentView.viewRef (pseudo code)
        ref.changeDetectorRef.detectChanges();
    };
    return ParentComponent;
}());
ParentComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'parent',
        templateUrl: 'parent.component.html',
    }),
    __param(2, core_1.Inject('Random')),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
        core_1.ViewContainerRef, Object])
], ParentComponent);
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parent.component.js.map