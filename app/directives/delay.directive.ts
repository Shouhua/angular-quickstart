import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[delay]',

})
export class DelayDirective{
    constructor(private templateRef:TemplateRef<any>,
        private viewContainerRef:ViewContainerRef){}

    @Input('delay') 
    set delayTime(time:number) {}
}