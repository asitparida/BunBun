import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ROLL_SAMPLES } from '../../roll';
import { BunBunRoll, GlazeOptions, UnitOptions } from '../../roll.model';
import { DataService } from '../../data.service';
import { tick } from '@angular/core/src/render3';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../cart.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems: BunBunRoll[] = [];
  net = 0;
  tax = 0;
  total = 0;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.currentCartItems$.subscribe(data => {
      this.cartItems = data;
      this.cartItems.forEach((roll: BunBunRoll | any) => {
        roll.total = roll.price * roll.units;
        const glaze = GlazeOptions.find(item => item.value === roll.glaze);
        if (glaze) {
          roll.glazeLabel = glaze.key;
        }
        roll.unitsLabel = roll.units;
      });
      this.processPrice();
    });
  }
  processPrice() {
    this.net = 0;
    this.cartItems.forEach((roll: BunBunRoll | any) => {
      roll.total = this.roundPriceUp(roll.price * roll.units);
      this.net += roll.total;
    });
    this.net = this.roundPriceUp(this.net);
    this.tax = this.roundPriceUp(0.07 * this.net);
    this.total = this.roundPriceUp(this.net + this.tax);
  }
  removeItem(index) {
    this.dataService.removeCartItem(index);
  }
  roundPriceUp(price: number) {
    return Math.floor((price * 100)) / 100;
  }
}
