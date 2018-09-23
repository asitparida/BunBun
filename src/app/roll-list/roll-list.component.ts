import { Component, OnInit } from '@angular/core';
import { ROLL_SAMPLES } from '../roll';
import { DataService } from '../data.service';
import { BunBunRoll } from '../roll.model';

@Component({
  selector: 'app-roll-list',
  templateUrl: './roll-list.component.html',
  styleUrls: ['./roll-list.component.scss']
})
export class RollListComponent implements OnInit {
  // tslint:disable max-line-length
  rolls = ROLL_SAMPLES.map( item => Object.assign(new BunBunRoll(), item));
  selectedItem = null;
  selectedItemIndex = null;
  showConfirmation = false;
  hideCarousel = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.showCartOption.next(true);
    this.dataService.orderConfirmationAvailable$.subscribe((data) => {
      this.showConfirmation = data;
    });
  }

  onRollDetailsClick() {
    this.hideCarousel = true;
    setTimeout(() => {
      this.selectedItem = null;
    }, 300);
  }

  loadSelectedItem(i) {
    this.selectedItemIndex = i;
    this.selectedItem = this.rolls[this.selectedItemIndex];
    this.hideCarousel = false;
  }

  onNextItem() {
    this.selectedItemIndex = this.selectedItemIndex + 1;
    this.selectedItemIndex = this.selectedItemIndex > this.rolls.length - 1 ? 0 : this.selectedItemIndex;
    this.dataService.itemDetailsSlideDirection.next(true);
    this.selectedItem = this.rolls[this.selectedItemIndex];
  }
  onPreviousItem() {
    this.selectedItemIndex = this.selectedItemIndex - 1;
    this.selectedItemIndex = this.selectedItemIndex < 0 ? this.rolls.length - 1 : this.selectedItemIndex;
    this.dataService.itemDetailsSlideDirection.next(false);
    this.selectedItem = this.rolls[this.selectedItemIndex];
  }

}
