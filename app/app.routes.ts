/**
 * Created by shouhua on 2016/6/24.
 */
import { Routes} from "@angular/router";

import {HeroesRoutes} from './heroes/heroes.routes';
import {DashboardRoutes} from './dashboard/dashboard.routes'
import {RequestRoutes} from "./simplehttp/simplehttp.routes";
import {HostRoutes} from "./host-element/host-element.routes";
import {LoginRoutes} from "./login/login.routes";
import {TabsRoutes} from './tabs/tabs.routes';
import { AddRoutes } from './add/add.routes';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {MyResolver} from './service/myresolver.resolver'
import { DynamicCompilerRoutes } from './dynamic-compiler/dynamic-compiler.routes';
import { TemplateRoutes } from './template-demo/template-demo.routes';

export const routes : Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch:'full'},
    {path: 'hero/:id', component: HeroDetailComponent, resolve:{something:MyResolver}},
    ...HeroesRoutes,
    ...DashboardRoutes,
    ...RequestRoutes,
    ...HostRoutes,
    ...LoginRoutes,
    ...TabsRoutes,
    ...AddRoutes,
    ...DynamicCompilerRoutes,
    ...TemplateRoutes
    // add ** for no match
];
