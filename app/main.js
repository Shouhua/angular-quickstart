"use strict";
/**
 * Created by shouhua on 2016/5/19.
 */
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var core_1 = require("@angular/core");
//PLATFORM_INITIALIZER 是一个数组，里面存放着初始化函数
function testInitializer() {
    console.log('just test for initializer...');
}
function testBootstrapListener(moduleRef) {
    console.log('just for app bootstrap listener...');
}
platform_browser_dynamic_1.platformBrowserDynamic([
    { provide: core_1.PLATFORM_INITIALIZER, useValue: testInitializer, multi: true },
    { provide: core_1.APP_BOOTSTRAP_LISTENER, useValue: testBootstrapListener, multi: true }
])
    .bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map