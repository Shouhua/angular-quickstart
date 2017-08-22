/**
 * Created by shouhua on 2016/8/12.
 */
import { NgModule,Renderer} from '@angular/core';
import { CommonModule } from '@angular/common';//包括很多公用的命令，模板，管道等，例如ngIf
import { HeroesComponent } from './heroes.component';
import { routing } from './heroes.routing';

@NgModule({
    declarations: [HeroesComponent],
    //必须声明为exports，不然引用不了，因为有可能，heroesComponent是供这个module内部使用的
    //当然，也可以直接exports，而不declarations，这样内部就引用不了了
    imports:[CommonModule, routing],
    exports:[HeroesComponent]

})
export default class HeroesModule {//使用default，就不用在route里面使用path#HeroesModule

}