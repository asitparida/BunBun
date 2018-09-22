import { Component, OnInit } from '@angular/core';
import { ROLL_SAMPLES } from '../roll';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems = ROLL_SAMPLES.slice(0, 2);
  cartSteps = [1, 2, 3];
  activeStep = 1;
  constructor(private router: Router) { }

  ngOnInit() {
    this.cartItems.forEach((element: any) => {
      element.glaze = 'Vanilla Milk';
    });
  }
  closeCart() {
    this.router.navigate(['/list']);
  }
  completeCheckout() {
    this.router.navigate(['/list']);
    console.log('chekcout');
  }
}
