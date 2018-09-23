import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { BunBunRoll } from './roll.model';

@Injectable()
export class DataService {
    orderConfirmationAvailable = new ReplaySubject<boolean>();
    orderConfirmationAvailable$ = this.orderConfirmationAvailable.asObservable();
    showCartOption = new ReplaySubject<boolean>();
    showCartOption$ = this.showCartOption.asObservable();
    private cartItems = [];
    currentCartItems = new ReplaySubject<Array<BunBunRoll>>();
    currentCartItems$ = this.currentCartItems.asObservable();
    itemDetailsSlideDirection = new Subject<boolean>();
    itemDetailsSlideDirection$ = this.itemDetailsSlideDirection.asObservable();
    addItemToCart(item: BunBunRoll) {
        const temp = this.cartItems.find(x => x.name === item.name && x.glaze === item.glaze);
        if (temp) {
            this.cartItems.forEach(x => {
                if (x.name === item.name && x.glaze === item.glaze) {
                    x.units = x.units + item.units;
                }
            });
        } else {
            this.cartItems.push(item);
        }
        this.currentCartItems.next(this.cartItems);
    }
    removeCartItem(index: number) {
        this.cartItems.splice(index, 1);
        this.currentCartItems.next(this.cartItems);
    }
    completeCheckout() {
        this.cartItems = [];
        this.currentCartItems.next(this.cartItems);
    }
}
