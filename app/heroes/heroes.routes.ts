/**
 * Created by shouhua on 2016/6/24.
 */
import {HeroesComponent} from './heroes.component'
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {MyResolver} from '../service/myresolver.resolver'
import { Routes } from '@angular/router';

export const HeroesRoutes: Routes = [
    {path: 'heroes', loadChildren:'app/heroes/heroes.module'},
];

// export const HeroesRoutes = [
//     {path: 'heroes', component: HeroesComponent},
//     {path: 'hero/:id', component: HeroDetailComponent, resolve:{something:MyResolver}}
// ];