import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  // path for all products
  {path:'',component:AllproductsComponent},
  // path for about
  {path:'about',component:AboutComponent},
  // path for login
  {path:'login',component:LoginComponent},
  // path fot register
  {path:'register',component:RegisterComponent},
  // path for cart
  {path:'cart',component:CartComponent},
  
  // path for page not found
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
