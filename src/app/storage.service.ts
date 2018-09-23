import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { BunBunRoll } from './roll.model';

@Injectable()
export class StorageService {
    useStorage = false;
    cartStorage;
    wishlistStorage;
    cartId = '_BUNBUN_CART';
    wishListId = '_BUNBUN_WISHLIST';
    constructor() {
        if (window.localStorage) {
            this.useStorage = true;
        }
    }
    saveCart(cartData: any) {
        if (this.useStorage) {
            window.localStorage.setItem(this.cartId, JSON.stringify(cartData));
        }
    }
    getCartStorage() {
        if (this.useStorage) {
            this.cartStorage = window.localStorage.getItem(this.cartId);
            if (this.cartStorage) {
                return JSON.parse(this.cartStorage);
            }
        }
        return null;
    }
    saveWishlist(wishlist: any) {
        if (this.useStorage) {
            window.localStorage.setItem(this.wishListId, JSON.stringify(wishlist));
        }
    }
    getWishlistStorage() {
        if (this.useStorage) {
            this.wishlistStorage = window.localStorage.getItem(this.wishListId);
            if (this.wishlistStorage) {
                return JSON.parse(this.wishlistStorage);
            }
        }
        return null;
    }
}
