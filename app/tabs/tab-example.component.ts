/**
 * Created by shouhua on 2016/7/5.
 */
import {Tabs} from './tabs.component';
import {Tab} from './tab.component';
import {Component} from '@angular/core';
import {TitleCasePipe} from '../pipes/title-case.pipe'

@Component({
    selector:'tab-example',
    //pipes:[TitleCasePipe],
    template:`
    <tabs>
    <tab [tabTitle]="'Tab 1'">{{"hello world"|titleCase}}</tab>
    <tab tabTitle="Tab 2">tab222222</tab>
</tabs>
`
})
export class TabExample{

}