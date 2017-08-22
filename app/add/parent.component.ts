import { Component, ComponentFactoryResolver, ViewContainerRef, Inject} from '@angular/core';
import { ChildComponent } from './child/child.component';


@Component({
    moduleId: module.id,
    selector: 'parent',
    templateUrl: 'parent.component.html',
    //entryComponents:[ChildComponent]//提前编译ChildComponent
})
export class ParentComponent{
    comp:string;
    value:number;

    constructor(private componentFactoryResolver:ComponentFactoryResolver, 
        private viewContainerRef:ViewContainerRef, @Inject('Random') r:any) {
            this.value = r;
         }

    private addComp(){
        console.info('Inject random value is: '+this.value);
        console.log(this.comp);

        const factory = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
        //ref : ComponentRef
        const ref  = this.viewContainerRef.createComponent(factory);
        //ref.instance is child Component ref instance
        ref.instance.name = {id:this.comp};//给动态新建的component传递参数
        //ref.changeDetectRef : ChildComponent.ParentView.viewRef (pseudo code)
        ref.changeDetectorRef.detectChanges();
    }
}