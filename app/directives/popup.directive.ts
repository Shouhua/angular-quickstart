import { Directive, Input, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[popup]',
})
export class PopupDirective{
    @Input() message:string;

    constructor(_elementRef:ElementRef) {
        console.log(_elementRef);
     }

     @HostListener('click', ['$event.target'])
     onclick(btn:any){
         console.log("button", btn, "message", this.message);
     }

}