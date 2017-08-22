import { ParentComponent } from './parent.component'

//if we not use "export default" in add.module, 
//then we should add "#AddModule" suffix in loadChildren string
export const AddRoutes = [
    {path:'add', loadChildren:'/app/add/add.module'}
];

export const AddRoutesChild = [
    {path:'', component:ParentComponent}
];