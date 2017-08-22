/**
 * Created by shouhua on 2016/10/2.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import {HeroesComponent} from './heroes.component'
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {MyResolver} from '../service/myresolver.resolver'

const HeroesRoutes:Routes = [
    {path:'', redirectTo:'heroes', pathMatch:'full'},
    {path: 'heroes', component: HeroesComponent},
    //{path: 'hero/:id', component: HeroDetailComponent, resolve:{something:MyResolver}}
];

export const routing:ModuleWithProviders = RouterModule.forChild(HeroesRoutes);