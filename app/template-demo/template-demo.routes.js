"use strict";
/**
 * Created by shouhua on 2016/6/27.
 */
var template_demo_component_1 = require("./template-demo.component");
exports.TemplateDemoChild = [
    { path: '', component: template_demo_component_1.TemplateDemoComponent }
];
exports.TemplateRoutes = [
    { path: 'templatedemo', loadChildren: '/app/template-demo/template-demo.module#TemplateDemoModule' }
];
//# sourceMappingURL=template-demo.routes.js.map