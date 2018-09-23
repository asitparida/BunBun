import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-carousel',
  templateUrl: './item-carousel.component.html',
  styleUrls: ['./item-carousel.component.scss']
})
export class ItemCarouselComponent implements OnInit {

  @Output() closeClick = new EventEmitter<any>();
  @Output() previousItem = new EventEmitter<any>();
  @Output() nextItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  onCloseClick() {
    this.closeClick.emit();
  }
  onCycleNextItem(direction) {
    if (direction === 1) {
      this.nextItem.emit();
    } else {
      this.previousItem.emit();
    }
  }
}
