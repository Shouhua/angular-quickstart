/**
 * Created by shouhua on 2016/6/15.
 */
import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
    VERSION, Router, NavigationStart, NavigationCancel, NavigationEnd,
    NavigationError, ActivatedRoute, ActivatedRouteSnapshot
} from '@angular/router'
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    loading: boolean;
    data: any;

    constructor(
        private http: Http,
        private router: Router
    ) {
        // router.events.subscribe(e => {
        //     console.log(`event: ${e}`);
        // });
        // router.events.groupBy(e => e.id).map(this.collectAllEventForNavigation).mergeAll()
        //     .subscribe((es: Event[]) => {
        //         console.log("navigation events", es);
        //     });
        console.log("Module:");
        console.log(module);
    }

    ngOnInit() {
        console.log(`The route version is: ${VERSION.full}`);
    }

    onSubmit(form: any): void {
        console.log(form.username, ":", form.password, ":", form);
        this.loading = true;

        let headers: Headers = new Headers();
        headers.append("Authorization", "Basic " + btoa("IdentityWebUI:secret"));
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("Cache-Control", "no-cache");

        let opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        let body = 'grant_type=password&username=' + form.username + '&password=' + form.password + '&scope=openid'

        this.http.post(
            'https://localhost/MSRDemo/core/connect/token',
            body,
            opts)
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            });
    }
    isStart(e: Event): boolean {
        return e instanceof NavigationStart;
    }

    isEnd(e: Event) {
        return e instanceof NavigationCancel ||
            e instanceof NavigationEnd ||
            e instanceof NavigationError;
    }

    // collectAllEventForNavigation(obs: Observable<Event>): Observable<Event[]> {
    //     let observer: Observable<Event[]>;
    //     const events = [];
    //     const sub = obs.subscribe(e => {
    //         events.push(e);
    //         if (this.isEnd(e)) {
    //             observer.next(events);
    //             observer.complete();
    //         }
    //     });
    //     return new Observable<Event[]>(o => observer = o);
    // }
}