import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showCart = true;
  cartItems = [];
  lastLen = 0;
  itemAdded = false;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.showCartOption$.subscribe(data => this.showCart = data);
    this.dataService.currentCartItems$.subscribe(data => {
      this.cartItems = data;
      if (this.cartItems.length !== this.lastLen) {
        this.itemAdded = true;
        setTimeout(() => {
          this.itemAdded = false;
        }, 300);
      }
      this.lastLen = this.cartItems.length;
    });
    this.dataService.loadedFromStorage$.subscribe((play) => {
      console.log(play);
      if (play) {
        setTimeout(() => {
          this.dataService.playAudio();
          this.dataService.loadedFromStorage.next(false);
        });
      }
    });
  }

  openCart() {
    if (this.cartItems.length > 0) {
      this.router.navigate(['/cart']);
    }
  }

}
