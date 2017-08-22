/**
 * Created by shouhua on 2016/7/5.
 */
import {Component} from '@angular/core';

@Component({
    selector:'tab-example',
    template:`
        <tabs2>
            <tab2 [tabTitle]="'Tab 1'">tab1 test</tab2>
            <tab2 tabTitle="Tab 2">tab2 test</tab2>
        </tabs2>
`
})
export class TabExample2{

}