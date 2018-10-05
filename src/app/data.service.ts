import { Injectable } from '@angular/core';
import { ReplaySubject, Subject, BehaviorSubject } from 'rxjs';
import { BunBunRoll } from './roll.model';
import { StorageService } from './storage.service';

@Injectable()
export class DataService {
    orderConfirmationAvailable = new ReplaySubject<boolean>();
    orderConfirmationAvailable$ = this.orderConfirmationAvailable.asObservable();
    showCartOption = new ReplaySubject<boolean>();
    showCartOption$ = this.showCartOption.asObservable();
    private cartItems = [];
    currentCartItems = new ReplaySubject<Array<BunBunRoll>>();
    currentCartItems$ = this.currentCartItems.asObservable();
    loadedFromStorage = new BehaviorSubject<boolean>(false);
    loadedFromStorage$ = this.loadedFromStorage.asObservable();
    itemDetailsSlideDirection = new Subject<boolean>();
    itemDetailsSlideDirection$ = this.itemDetailsSlideDirection.asObservable();
    audioPlay = new Subject<any>();
    audioPlay$ = this.audioPlay.asObservable();
    constructor(private storageService: StorageService) {
        const localCart = this.storageService.getCartStorage();
        if (localCart && localCart.length > 0) {
            this.cartItems = localCart;
            this.currentCartItems.next(this.cartItems);
            this.loadedFromStorage.next(true);
        }
    }
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
        this.updateCart();
    }
    removeCartItem(index: number) {
        this.cartItems.splice(index, 1);
        this.updateCart();
    }
    completeCheckout() {
        this.cartItems = [];
        this.updateCart();
    }
    updateCart() {
        this.currentCartItems.next(this.cartItems);
        this.storageService.saveCart(this.cartItems);
    }
    playAudio() {
        this.audioPlay.next({});
    }
}
