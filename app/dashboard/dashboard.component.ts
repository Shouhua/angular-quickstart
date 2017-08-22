/**
 * Created by shouhua on 2016/5/22.
 */
import { VERSION, Component, OnInit, Inject, ApplicationRef } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';
import { Router } from '@angular/router';
import { Class, makeDecorator, makeParamDecorator, makePropDecorator } from '@angular/core/src/util/decorators';
import * as re from 'reflect-metadata';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    value: number;
    constructor(private heroService: HeroService,
        private router: Router, @Inject('Random') r: any,
        private appRef: ApplicationRef) {
        this.value = r;
        //view angular version 
        console.log(`Angular version is: ${VERSION.full}`);

        //angular compiled result
        console.log(`ApplicationRef by compiled result: `);
        console.log(appRef);
        //angular metadata info
        console.log(`annotations: ${Reflect.getMetadata('annotations', DashboardComponent)}`);
        console.log(`annotations: ${Reflect.getOwnMetadata('annotations', DashboardComponent)}`);
        console.log(`design:paramtypes: ${Reflect.getMetadata('design:paramtypes', DashboardComponent)}`);
        console.log(`propMetadata: ${Reflect.getMetadata('propMetadata', DashboardComponent)}`);
        console.log(`parameters: ${Reflect.getMetadata('parameters', DashboardComponent)}`);

        let annotations = Reflect.getOwnMetadata('annotations', DashboardComponent);
        console.log(annotations);
        console.log(annotations[0]);
    };

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero) {
        console.info('inject random value in dashboard is: ' + this.value);
        let link = ['/hero', hero.id];
        this.router.navigate(link);
    }
}

