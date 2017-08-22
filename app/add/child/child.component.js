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
var ChildComponent = (function () {
    function ChildComponent(differs) {
        this.differs = differs;
        this.differ = this.differs.find({}).create(null);
    }
    ChildComponent.prototype.ngDoCheck = function () {
        //不要将所有逻辑写在里面， 所以我们可以使用immutuable,ngOnChanges
        //这些都是针对input，如果要针对其他对象变化，使用，this.Componentref.detectchanges()
        var changes = this.differ.diff(this.name);
        if (changes) {
            console.log('changes detected');
        }
        else {
            console.log('nothing changed');
        }
    };
    return ChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChildComponent.prototype, "name", void 0);
ChildComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'child',
        template: "\n    <div>hello, world! {{name.id}}</div>\n    "
    }),
    __metadata("design:paramtypes", [core_1.KeyValueDiffers])
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map