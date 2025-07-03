import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';


export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children:[
            {
                path:'',
                component: HomeComponent
            },
            {
                path:'Prendas/:id',
                component: ListProductComponent
            }
        ]
        
    }
];
