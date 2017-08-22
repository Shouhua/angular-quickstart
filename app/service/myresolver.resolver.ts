import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MyResolver implements Resolve<any>{
    constructor(){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        let id = route.params['id'];
        return Observable.from(["Hello, world! "+id]);
    }
}