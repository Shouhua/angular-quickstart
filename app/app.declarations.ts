import { AppComponent }  from './app.component';
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SimpleHTTPComponent} from "./simplehttp/simplehttp.component";
import {HostElementComponnet} from "./host-element/host-element.component";
import {LoginComponent} from "./login/login.component";
import {TabExample} from "./tabs/tab-example.component";
import {TabExample2} from "./tabs/tab-example2.component";
import {PopupDirective} from './directives/index';
import {Tabs} from './tabs/tabs.component';
import {Tab} from './tabs/tab.component';
import {Tab2} from './tabs/tab2.component';
import {Tabs2} from './tabs/tabs2.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { MainComponent } from './host-element/main.component';
import{ MovieComponent } from './host-element/movie.component';

export const Declarations : Array<any> = [
        AppComponent,
        HeroDetailComponent,
        DashboardComponent,
        SimpleHTTPComponent,
        HostElementComponnet,
        LoginComponent,
        TabExample,
        TabExample2,
        PopupDirective, 
        Tabs,
        Tab,
        TitleCasePipe,
        Tab2,
        Tabs2,
        MainComponent,
        MovieComponent,
];