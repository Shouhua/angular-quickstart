/**
 * Created by shouhua on 2016/6/27.
 */
import { HostElementComponnet } from "./host-element.component";

//按照官方的说法，这种const写法是可以得（tolerate），但是推荐的写法是lower camel case（prefer）
export const HostRoutes = [
    {path:'host', component: HostElementComponnet}
];
