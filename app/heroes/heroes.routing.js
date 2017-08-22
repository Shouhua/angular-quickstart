"use strict";
var router_1 = require("@angular/router");
var heroes_component_1 = require("./heroes.component");
var HeroesRoutes = [
    { path: '', redirectTo: 'heroes', pathMatch: 'full' },
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
];
exports.routing = router_1.RouterModule.forChild(HeroesRoutes);
//# sourceMappingURL=heroes.routing.js.map