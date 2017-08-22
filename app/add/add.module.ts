import { NgModule } from '@angular/core';
import { AddRoutes } from './add.routes';
import { RouterModule } from '@angular/router';
import { ParentComponent}   from './parent.component';
import { ChildComponent } from './child/child.component';
import { AddRoutesChild } from './add.routes';

//feature module
@NgModule({
    imports: [RouterModule.forChild(AddRoutesChild)],
    exports: [ParentComponent],
    declarations: [ParentComponent, ChildComponent],
    entryComponents:[ChildComponent]
})
export default class AddModule { 

}
