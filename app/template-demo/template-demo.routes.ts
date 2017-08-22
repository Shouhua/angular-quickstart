/**
 * Created by shouhua on 2016/6/27.
 */
import { TemplateDemoComponent } from "./template-demo.component";

export const TemplateDemoChild = [
    {path:'', component:TemplateDemoComponent}
];

export const TemplateRoutes = [
    {path:'templatedemo', loadChildren:'/app/template-demo/template-demo.module#TemplateDemoModule'}
    //{path:'add', component:ParentComponent}
];
