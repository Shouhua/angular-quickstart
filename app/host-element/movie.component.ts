import { Component, OnInit, Input, ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import {Actor} from '../model/actor.model';

@Component({
    moduleId: module.id,
    selector: 'movie',
    template: `
    <div>
    <h3>{{ title }}</h3>
    <p>
    <label>Actor:</label>
    <span>{{actor.firstName}} {{actor.lastName}}</span>
    </p>
    </div>
    <span> {{actorLocal.firstName}}-{{actorLocal.lastName}}</span>
    <button type="button" (click)="test()">testChild</button>
    `,
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit {
    @Input() title:string;
    @Input() actor:Actor;
    actorLocal:Actor;

    constructor(private changeDetectorRef: ChangeDetectorRef){
        console.log("constructor");
        this.actorLocal = new Actor("localFirstName", "localLastName");
    }

    ngOnInit(){
        this.actorLocal.firstName = "hello";
        console.log("ngOnInit");
    }

    test(){
        // this.title = "change title";
        // this.actor.firstName = "shouhua";
        this.actorLocal.firstName = "change local first name";
    }
}