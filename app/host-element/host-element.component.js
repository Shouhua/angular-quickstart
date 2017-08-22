"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by shouhua on 2016/6/14.
 */
//import {Directive, ElementRef} from '@angular/core';
var core_1 = require("@angular/core");
// //命令使用场合，可以在无关模板，但是要处理展现逻辑时使用属性命令
// @Directive({
//     selector:'[popup]',
//     inputs: ['message'],//官方不推荐将input，output写在这里，推荐一行写在类体中
//     host:{              //官方推荐使用@HostLinstener和@HostBinding来代替host property
//                         //同样的理由，因为我们使用上述可以实现只在一处修改
//         '(click)':'displayMessage()'
//     }
// })
// export class Popup{
//     constructor(_elementRef:ElementRef){
//         console.log(_elementRef);
//     }
//     message:String;
//     displayMessage():void{
//         alert(this.message);
//     }
// }
var HostElementComponnet = (function () {
    function HostElementComponnet() {
    }
    return HostElementComponnet;
}());
HostElementComponnet = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'host-element',
        templateUrl: 'host-element.component.html',
    })
], HostElementComponnet);
exports.HostElementComponnet = HostElementComponnet;
//# sourceMappingURL=host-element.component.js.map