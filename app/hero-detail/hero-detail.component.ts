/**
 * Created by shouhua on 2016/5/21.
 */
/*import {Component, Input} from '@angular/core';*/
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../model/hero';
import {
    Router, ActivatedRoute, ActivatedRouteSnapshot,
    UrlTree, UrlSegment, UrlSegmentGroup, PRIMARY_OUTLET
} from '@angular/router';
import { HeroService } from '../service/hero.service';
import { Observable } from 'rxjs/Rx'

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
    hero: Hero;
    sub: any;
    data: Observable<any>;
    id: number;

    constructor(private heroService: HeroService,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        // urltree有urlSegmentGroup，然后按照router outlet分组,每个组下面有自己的segment，parameters,
        //但是fragment和querystring不在outlet分组下面，这2项直接在root（urltree）下面
        // const tree: UrlTree = router.parseUrl('/index/33(popup:message/44//help:overview)?token=1234');
        const tree: UrlTree = router.parseUrl('/index/33/(popup:message/44//help:overview)?token=1234');
        console.log(tree);
        //activated route information is come from url tree
        route.url.forEach((value: UrlSegment[]) => {
            console.log(value);
        });
    };

    ngOnInit() {
        this.route.data.pluck('something').subscribe(
            function (res) {
                console.log(res);
            }
        );
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });
        const s: ActivatedRouteSnapshot = this.route.snapshot;
        console.log(s.params['id']);
        this.id = +s.params['id'];
    }
    goBack() {
        window.history.back();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    NavigatToNext() {
        this.router.navigate(['hero', this.id + 1]);
    }
}


