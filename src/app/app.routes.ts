import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/main/about/about.component';
import { LoginComponent } from './components/main/login/login.component';
import { RegisterComponent } from './components/main/register/register.component';
import { HomeComponent } from './components/main/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddProductComponent } from './components/dashboard/add-product/add-product.component';
export const routes: Routes = [
    {path:"",component:MainComponent,children:[
        {path:"home",component:HomeComponent},
        {path:"about",component:AboutComponent},
        {path:"login",component:LoginComponent},
        {path:"register",component:RegisterComponent}
    ]},
    {path: 'dashboard', component: DashboardComponent,children:[{
        path:"dashboard",component:AddProductComponent},
        {path:"addProduct",component:AddProductComponent
    }]}
];
