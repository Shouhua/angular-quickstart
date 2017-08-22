import { Component, Input, DoCheck, OnChanges, KeyValueDiffers, SimpleChanges } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'child',
    template:`
    <div>hello, world! {{name.id}}</div>
    `
})
export class ChildComponent implements DoCheck {
    @Input() name:any;
    differ:any;

    constructor(private differs: KeyValueDiffers){
        this.differ = this.differs.find({}).create(null);
    }

    ngDoCheck(){//这里主要是检测对象中属性变化，这个是ngOnChanges做不到的，但是，这个函数是在做检测changes时每次都调用，所以不到万不得已，
        //不要将所有逻辑写在里面， 所以我们可以使用immutuable,ngOnChanges
        //这些都是针对input，如果要针对其他对象变化，使用，this.Componentref.detectchanges()
        var changes = this.differ.diff(this.name);
        if(changes) {
			console.log('changes detected');
			// changes.forEachChangedItem(r:any => console.log('changed ', r.currentValue));
			// changes.forEachAddedItem(r => console.log('added ' + r.currentValue));
			// changes.forEachRemovedItem(r => console.log('removed ' + r.currentValue));
		} else {
			console.log('nothing changed');
		}
    }
}