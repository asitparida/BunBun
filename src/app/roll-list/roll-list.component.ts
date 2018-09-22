import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll-list',
  templateUrl: './roll-list.component.html',
  styleUrls: ['./roll-list.component.scss']
})
export class RollListComponent implements OnInit {
  // tslint:disable max-line-length
  rolls = [
    { img: 'assets/bun_image.png', name: 'Bun Bun Original', description: 'A wonderful wafer lollipop wafer jujubes jujubes candy lemon drops cake danish gingerbread gummies chocolate marzipan tiramisu', ingredients: 'Pie, soufflé, biscuit, danish, jujubes, tiramisu ', calories: 450 },
    { img: 'assets/bun_image.png', name: 'Blackberry', description: 'A wonderful wafer lollipop wafer jujubes jujubes candy lemon drops cake danish gingerbread gummies chocolate marzipan tiramisu', ingredients: 'Pie, soufflé, biscuit, danish, jujubes, tiramisu ', calories: 450 },
    { img: 'assets/bun_image.png', name: 'Walnut', description: 'A wonderful wafer lollipop wafer jujubes jujubes candy lemon drops cake danish gingerbread gummies chocolate marzipan tiramisu', ingredients: 'Pie, soufflé, biscuit, danish, jujubes, tiramisu ', calories: 450 },
    { img: 'assets/bun_image.png', name: 'Bun Bun Original (Gluten Free)', description: 'A wonderful wafer lollipop wafer jujubes jujubes candy lemon drops cake danish gingerbread gummies chocolate marzipan tiramisu', ingredients: 'Pie, soufflé, biscuit, danish, jujubes, tiramisu ', calories: 450 },
    { img: 'assets/bun_image.png', name: 'Pumpkin Spice', description: 'A wonderful wafer lollipop wafer jujubes jujubes candy lemon drops cake danish gingerbread gummies chocolate marzipan tiramisu', ingredients: 'Pie, soufflé, biscuit, danish, jujubes, tiramisu ', calories: 450 },
    { img: 'assets/bun_image.png', name: 'Caramel Pecan', description: 'A wonderful wafer lollipop wafer jujubes jujubes candy lemon drops cake danish gingerbread gummies chocolate marzipan tiramisu', ingredients: 'Pie, soufflé, biscuit, danish, jujubes, tiramisu ', calories: 450 }
  ];
  selectedItem = null;
  selectedItemIndex = null;
  constructor() { }

  ngOnInit() {
    this.selectedItem = this.rolls[1];
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
