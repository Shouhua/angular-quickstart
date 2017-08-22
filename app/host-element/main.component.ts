import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Actor} from '../model/actor.model';

@Component({
    moduleId:module.id,
    selector:'main1',
    template:`
    <h1>MovieApp</h1>
    <p>{{ slogan }}</p>
    <button type="button" (click)="changeActorProperties()">Change Actor Properties</button>
    <button type="button" (click)="changeActorObject()">Change Actor Object</button>
    <div [ngStyle]="{'border':'1px solid black'}">
    <movie [title]="title" [actor]="actor"></movie>
    <button type="button" (click)="test()">test</button>
    </div>
    `,
    changeDetection:ChangeDetectionStrategy.OnPush
}) 
export class MainComponent{
    slogan:string = 'Just movie information';
    title:string = 'Termination 1';
    actor:Actor = new Actor('Arnold', 'Schwarzenegger');

    constructor(private changeDetectionRef:ChangeDetectorRef){}

    changeActorProperties(){
        this.actor.firstName = 'Nicholas';
        this.actor.lastName = 'Cage';
        //this.changeDetectionRef.detectChanges();
    }

    changeActorObject(){
        this.actor = new Actor('Bruce', 'Li');
    }

    test(){
        alert("just for test!");
    }
}