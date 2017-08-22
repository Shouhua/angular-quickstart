/**
 * Created by shouhua on 2016/5/19.
 */
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

import {PLATFORM_INITIALIZER, APP_BOOTSTRAP_LISTENER, ComponentRef} from '@angular/core';

//PLATFORM_INITIALIZER 是一个数组，里面存放着初始化函数
function testInitializer(){
    console.log('just test for initializer...');
}

function testBootstrapListener(moduleRef:any){
    console.log('just for app bootstrap listener...');
}

platformBrowserDynamic([
    {provide:PLATFORM_INITIALIZER, useValue:testInitializer, multi:true},
    {provide:APP_BOOTSTRAP_LISTENER, useValue:testBootstrapListener, multi:true}
    ])
.bootstrapModule(AppModule)
.catch(err => console.log(err));

