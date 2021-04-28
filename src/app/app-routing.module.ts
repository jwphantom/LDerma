import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductComponent } from './pages/shop/product/product.component';
import { ShopComponent } from './pages/shop/shop.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { AuthGuard } from "./shared/guard/auth.guard";
import { CartComponent } from './pages/cart/cart.component';
import { DetoxComponent } from './pages/shop/detox/detox.component';


const routes: Routes = [
  { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent  },
  { path: 'service', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'slim', component: DetoxComponent },
  { path : 'shop/product/:id', component: ProductComponent},
  { path : '', component: HomeComponent},
  { path: 'not-found', component: FourOhFourComponent },
  { path: 'register', component: SignupComponent },
  { path: 'login', component: SigninComponent },
  { path: '**', redirectTo: 'not-found' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
