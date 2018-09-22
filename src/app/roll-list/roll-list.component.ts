import { Component, OnInit } from '@angular/core';
import { ROLL_SAMPLES } from '../roll';

@Component({
  selector: 'app-roll-list',
  templateUrl: './roll-list.component.html',
  styleUrls: ['./roll-list.component.scss']
})
export class RollListComponent implements OnInit {
  // tslint:disable max-line-length
  rolls = ROLL_SAMPLES;
  selectedItem = null;
  selectedItemIndex = null;
  constructor() { }

  ngOnInit() {
    // this.selectedItem = this.rolls[1];
  }

  onRollDetailsClick() {
    this.selectedItem = null;
  }

  loadSelectedItem(i) {
    this.selectedItemIndex = i;
    this.selectedItem = this.rolls[this.selectedItemIndex];
  }

  onNextItem() {
    this.selectedItemIndex = this.selectedItemIndex + 1;
    this.selectedItemIndex = this.selectedItemIndex > this.rolls.length - 1 ? 0 : this.selectedItemIndex;
    this.selectedItem = this.rolls[this.selectedItemIndex];
  }
  onPreviousItem() {
    this.selectedItemIndex = this.selectedItemIndex - 1;
    this.selectedItemIndex = this.selectedItemIndex < 0 ? this.rolls.length - 1 : this.selectedItemIndex;
    this.selectedItem = this.rolls[this.selectedItemIndex];
  }

}
