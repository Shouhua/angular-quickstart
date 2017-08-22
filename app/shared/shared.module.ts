import { NgModule, ModuleWithProviders} from '@angular/core';
import { AuthService } from './auth.service';

//关于这种写法，是一个很复杂的故事，详情可以参见：http://blog.angular-university.io/angular2-ngmodule/
//这样是为了防止共享库会在全局范围和局部的module中依赖注入时产生2个实例，在全局的AppModule中使用import SharedModule.forRoot
//,而在局部的module中调用时直接import SharedModule
//始终保持AuthService不管在eager或者lazy loading中都是同一个实例
@NgModule()
export class SharedModule{
    static forRoot():ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers: [AuthService]
        };
    }
}