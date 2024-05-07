import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductStoreComponent } from './product-store/product-store.component';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';
import { AuthGuard } from './auth.guard';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',    
  },
  {
    path: 'login',    
    component: LoginComponent
  },  
  {
    path: 'product-store',
    component: ProductStoreComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'product-checkout',
    component: ProductCheckoutComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent,
    canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
