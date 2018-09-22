import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RollListComponent } from './roll-list/roll-list.component';
import { RollComponent } from './roll/roll.component';
import { CartComponent } from './cart/cart.component';
import { FindUsComponent } from './find-us/find-us.component';
import { AppRoutingModule } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { PageContentComponent } from './page-content/page-content.component';
import { ItemCarouselComponent } from './item-carousel/item-carousel.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RollListComponent,
    RollComponent,
    CartComponent,
    FindUsComponent,
    HeaderComponent,
    PageContentComponent,
    ItemCarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
