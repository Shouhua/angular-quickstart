import { NgModule } from '@angular/core';

import { DynamicDetail }   from './detail.component';
import { DynamicTypeBuilder }     from './type.builder';
import { DynamicTemplateBuilder } from './template.builder';

// parts module
import { PartsModule }   from './parts/parts.module';

@NgModule({
    imports: [PartsModule],
    exports: [DynamicDetail],
    declarations:  [DynamicDetail],
})
export class DynamicModule { 
    static forRoot(){
        return {
            ngModule: DynamicModule,
            providers:[
                DynamicTemplateBuilder,
                DynamicTypeBuilder
            ]
        }
    }
}
