import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROLL_SAMPLES } from '../../roll';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../cart.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems = ROLL_SAMPLES.slice(0, 2);
  constructor() { }
  ngOnInit() {
    this.cartItems.forEach((element: any) => {
      element.glaze = 'Vanilla Milk';
    });
  }

}
