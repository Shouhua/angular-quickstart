/**
 * Created by shouhua on 2016/8/10.
 */
import { NgModule, enableProdMode} from '@angular/core';
import { COMPILER_PROVIDERS } from '@angular/compiler';
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { HttpModule, XHRBackend} from '@angular/http'

import {MyResolver} from './service/myresolver.resolver';
import { DynamicModule } from './dynamic-compiler/dynamic.module';

import { AppComponent }  from './app.component';
import { routes } from './app.routes';
import { HeroService} from "./service/hero.service";
import { Declarations } from './app.declarations';



//enableProdMode();


//这里可以利用spread operator增加可读性，另外新建文件
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        HttpModule,
        DynamicModule.forRoot(),
        //AddModule
    ],
    declarations: [...Declarations],
    bootstrap: [ AppComponent ],
    providers:[HeroService, MyResolver, {provide:'Random', useValue:Math.random()},
        COMPILER_PROVIDERS
    ],
})
export class AppModule {

}
