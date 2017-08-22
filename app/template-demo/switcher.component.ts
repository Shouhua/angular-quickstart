import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'switcher',
    template:`
        <b>Inserted Component:</b>
        <div><ul><li *ngFor="let item of items">
         <ng-template  [ngTemplateOutlet]="itemTemplate" 
            [ngOutletContext]="{ $implicit: item }">
        </ng-template>
        </li></ul></div>
    `
})
export class SwitcherComponent{
    items = [{
    label: 'label1',
    value: 'value1',
  },{
    label: 'label2',
    value: 'value2',
  }];
  
  @ContentChild('itemTemplate') public itemTemplate : TemplateRef<any>;
}