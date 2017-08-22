/**
 * Created by shouhua on 2016/5/21.
 */
/*import {Component, Input} from '@angular/core';*/
import {Component, OnInit, OnDestroy} from '@angular/core';
import {Hero} from '../model/hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../service/hero.service';
import { Observable } from 'rxjs/Rx'

@Component({
    moduleId:module.id,
    selector:'my-hero-detail',
    templateUrl:'hero-detail.component.html',
    styleUrls:['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy{
    hero:Hero;
    sub:any;
    data: Observable<any>;

    constructor(private heroService: HeroService,
        private route:ActivatedRoute){};

    ngOnInit(){
        this.route.data.pluck('something').subscribe(
            function(res){
                console.log(res);
            }
        );
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.heroService.getHero(id).then(hero=>this.hero = hero);
        });
    }
    goBack(){
        window.history.back();
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }
}


