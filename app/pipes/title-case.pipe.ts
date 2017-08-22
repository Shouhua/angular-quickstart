/**
 * Created by shouhua on 2016/7/27.
 */

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'titleCase'
})
export  class TitleCasePipe implements PipeTransform{
    public transform(input:string):string{
        if(!input){
            return '';
        }
        else {
            return input.replace(/\w\S*/g, (txt => txt[0].toUpperCase()+txt.substr(1).toLowerCase()));
        }
    }
}