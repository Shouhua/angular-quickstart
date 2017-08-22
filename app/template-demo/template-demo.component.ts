import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'template-demo',
    templateUrl: 'template-demo.component.html'
})
export class TemplateDemoComponent {
    outsideValue = 'on';

    toggleComponent(){
        if(this.outsideValue === 'on'){
            this.outsideValue = 'off';
        }
        else{
            this.outsideValue = 'on';
        }
    }
}