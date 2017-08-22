"use strict";
var parent_component_1 = require("./parent.component");
//if we not use "export default" in add.module, 
//then we should add "#AddModule" suffix in loadChildren string
exports.AddRoutes = [
    { path: 'add', loadChildren: '/app/add/add.module' }
];
exports.AddRoutesChild = [
    { path: '', component: parent_component_1.ParentComponent }
];
//# sourceMappingURL=add.routes.js.map