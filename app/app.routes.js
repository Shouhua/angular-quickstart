"use strict";
var heroes_routes_1 = require("./heroes/heroes.routes");
var dashboard_routes_1 = require("./dashboard/dashboard.routes");
var simplehttp_routes_1 = require("./simplehttp/simplehttp.routes");
var host_element_routes_1 = require("./host-element/host-element.routes");
var login_routes_1 = require("./login/login.routes");
var tabs_routes_1 = require("./tabs/tabs.routes");
var add_routes_1 = require("./add/add.routes");
var hero_detail_component_1 = require("./hero-detail/hero-detail.component");
var myresolver_resolver_1 = require("./service/myresolver.resolver");
var dynamic_compiler_routes_1 = require("./dynamic-compiler/dynamic-compiler.routes");
var template_demo_routes_1 = require("./template-demo/template-demo.routes");
exports.routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'hero/:id', component: hero_detail_component_1.HeroDetailComponent, resolve: { something: myresolver_resolver_1.MyResolver } }
].concat(heroes_routes_1.HeroesRoutes, dashboard_routes_1.DashboardRoutes, simplehttp_routes_1.RequestRoutes, host_element_routes_1.HostRoutes, login_routes_1.LoginRoutes, tabs_routes_1.TabsRoutes, add_routes_1.AddRoutes, dynamic_compiler_routes_1.DynamicCompilerRoutes, template_demo_routes_1.TemplateRoutes);
//# sourceMappingURL=app.routes.js.map