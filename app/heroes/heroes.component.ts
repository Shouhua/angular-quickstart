/**
 * Created by shouhua on 2016/5/19.
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from'../model/hero';
import { HeroService } from '../service/hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'my-heroes',
    templateUrl:'heroes.component.html',
    styleUrls:['heroes.component.css'],
    //directives:[HeroDetailComponent]
})
    export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    /*heroes = HEROES;*/
    heroes:Hero[];
    selectedHero: Hero;

    constructor(private heroService:HeroService,
        private router:Router, 
        private activatedRoute:ActivatedRoute){};

    getHeroes(){
        this.heroService.getHeroes().then(heroes=>this.heroes = heroes);
    }
    ngOnInit(){
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    gotoDetails(){
        this.router.navigate(['hero',this.selectedHero.id]);
    }
}
