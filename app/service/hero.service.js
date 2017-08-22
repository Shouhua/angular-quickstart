/**
 * Created by shouhua on 2016/5/22.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_heros_1 = require("../data/mock-heros");
require("rxjs/add/operator/toPromise");
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        //return HEROES;
        return Promise.resolve(mock_heros_1.HEROES);
    };
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
    HeroService.prototype.getHeroesSlow = function () {
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(mock_heros_1.HEROES); }, 2000); });
    };
    HeroService.prototype.getHero = function (id) {
        return Promise.resolve(mock_heros_1.HEROES).then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
        //return this.getHeroes().then(heroes=>heroes.filter(hero=>hero.id === id)[0]);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map