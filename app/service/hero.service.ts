/**
 * Created by shouhua on 2016/5/22.
 */

import { Injectable } from '@angular/core';
import { Hero } from "../model/hero";
import { HEROES } from '../data/mock-heros';

import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class HeroService{
    getHeroes(){
        //return HEROES;
        return Promise.resolve(HEROES);
    }
/*    private handleError(error:any){
        console.error('An error occured',error);
        return Promise.reject(error.message||error);
    }
    private heroesUrl = 'app/heroes';

    constructor(private http:Http){};

    getHeroes():Promise<Hero[]>{
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response=>response.json().data)
            .catch(this.handleError);
    }*/

    getHeroesSlow(){
        return new Promise<Hero[]>(resolve => setTimeout(()=>resolve(HEROES), 2000));
    }

    getHero(id:number){
        return Promise.resolve(HEROES).then(heroes=>heroes.filter(hero=>hero.id ===id)[0]);
        //return this.getHeroes().then(heroes=>heroes.filter(hero=>hero.id === id)[0]);
    }
}
