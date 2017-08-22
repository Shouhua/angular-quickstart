/**
 * Created by shouhua on 2016/6/14.
 */
//import {Directive, ElementRef} from '@angular/core';
import {Component, EventEmitter} from '@angular/core';
import { PopupDirective } from '../directives/popup.directive';

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

@Component({
    moduleId:module.id,
    selector:'host-element',
    templateUrl: 'host-element.component.html',
    //directives:[ PopupDirective ]
})
export class HostElementComponnet{

}