import { Component, OnInit } from '@angular/core';
import { ROLL_SAMPLES } from '../roll';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartSteps = [1, 2, 3];
  activeStep = 1;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }
  closeCart() {
    this.router.navigate(['/list']);
  }
  completeCheckout() {
    this.dataService.completeCheckout();
    this.dataService.orderConfirmationAvailable.next(true);
    this.router.navigate(['/list']);
  }
}
