/**
 * Created by shouhua on 2016/7/5.
 */
import {Component} from '@angular/core';
import {Tab} from './tab.component';

@Component({
    selector:'tabs',
    template:`
        <ul class="nav nav-tabs">
        <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a href="javascript:void(0)">{{tab.tabTitle}}</a>
</li>
</ul>
<ng-content></ng-content>
`
})
export class Tabs{
    tabs:Tab[] = [];

    constructor(){
        this.tabs = [];
    }

    selectTab(tab:Tab){
        this.tabs.forEach((t)=>{
            t.active = false;
        });
        tab.active = true;
    }

    addTab(tab:Tab){
        if(this.tabs.length === 0){
            tab.active = true;
        }
        this.tabs.push(tab);
    }
}