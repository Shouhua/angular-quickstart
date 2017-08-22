/**
 * Created by shouhua on 2016/6/15.
 */
import {Component} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    moduleId:module.id,
    selector:'login',
    templateUrl:'login.component.html'
})
export class LoginComponent {
    loading:boolean;
    data:any;

    constructor(private http:Http){}

    onSubmit(form:any):void {
        console.log(form.username, ":", form.password,":", form);
        this.loading = true;

        let headers:Headers = new Headers();
        headers.append("Authorization", "Basic "+ btoa("IdentityWebUI:secret"));
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.append("Cache-Control", "no-cache");

        let opts:RequestOptions = new RequestOptions();
        opts.headers = headers;

        let body = 'grant_type=password&username='+form.username+'&password='+form.password+'&scope=openid'

        this.http.post(
            'https://localhost/MSRDemo/core/connect/token',
            body, 
            opts)
            .subscribe((res:Response)=>{
                this.data = res.json();
                this.loading = false;
            });
    }
}