/**
 * Created by shouhua on 2016/7/5.
 */
import {Component, Input} from '@angular/core';
import {Tabs} from './tabs.component';

@Component({
    selector:'tab',
    template:`
    <div [hidden]="!active">
    <ng-content></ng-content>
</div>
`
})
export class Tab{
    @Input() tabTitle:string;
    active:boolean = this.active ||false ;

    constructor(tabs:Tabs){
        tabs.addTab(this);
    }
}