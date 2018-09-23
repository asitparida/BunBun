import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FindUsComponent } from './find-us/find-us.component';
import { RollListComponent } from './roll-list/roll-list.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: LandingComponent },
    { path: 'find-us', component: FindUsComponent },
    { path: 'list', component: RollListComponent },
    { path: 'cart', component: CartComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
