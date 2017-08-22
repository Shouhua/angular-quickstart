/**
 * Created by shouhua on 2016/7/5.
 */
import {Component, QueryList, ContentChildren, AfterContentInit, AfterViewInit} from '@angular/core';
import {Tab2} from './tab2.component';

@Component({
    selector:'tabs2',
    template:`
        <ul class="nav nav-tabs">
        <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a href="javascript:void(0)">{{tab.tabTitle}}</a>
</li>
</ul>
<ng-content></ng-content>
`
})
export class Tabs2 implements AfterContentInit, AfterViewInit {
    @ContentChildren(Tab2)//ContentChildren指的是ng-content中的内容，还有ViewChildren
    tabs: QueryList<Tab2>;
    
    ngAfterContentInit(){
        console.log("****** In ngAfterContentInit ******");
        let activeTabs = this.tabs.filter(tab=>tab.active);
        if(activeTabs.length === 0)
        {
            this.selectTab(this.tabs.first);
        }
    }
    ngAfterViewInit(){
        console.log("****** In ngAfterViewInit ******");
    }

    selectTab(tab:Tab2) {
        this.tabs.toArray().forEach((t)=> {
            t.active = false;
        });
        tab.active = true;
    }
}
