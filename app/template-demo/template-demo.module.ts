import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { TemplateDemoComponent } from './template-demo.component';
import { SwitcherComponent } from './switcher.component';
import { FirstInsertedComponent } from './firstInserted.component';
import { SecondInsertedComponent } from './secondInserted.component';
import { TemplateDemoChild } from './template-demo.routes'

@NgModule({
    imports: [CommonModule, RouterModule.forChild(TemplateDemoChild)],
    exports: [TemplateDemoComponent],
    declarations: [
        TemplateDemoComponent,
        FirstInsertedComponent,
        SecondInsertedComponent,
        SwitcherComponent,
    ],
    providers: [],
    entryComponents:[
        FirstInsertedComponent,
        SecondInsertedComponent
    ]
})
export class TemplateDemoModule { }
