import { Component, OnInit, Input, AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import { GlazeOptions, UnitOptions } from '../roll.model';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.scss']
})
export class RollComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() roll = null;
  glazeOptions = GlazeOptions;
  selectedGlaze = null;
  glazeSelectionOpen = false;
  unitOptions = UnitOptions;
  selectedUnits = null;
  unitSelectionOpen = false;
  constructor(private elRef: ElementRef, private dataService: DataService) { }
  slideDirectionIsLeft = true;
  showRoll = false;
  ngOnInit() {
    this.dataService.itemDetailsSlideDirection$.subscribe(data => this.slideDirectionIsLeft = data);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['roll'] && changes['roll'].currentValue) {
      this.showRoll = false;
      setTimeout(() => {
        this.showRoll = true;
      });
    }
  }
  ngAfterViewInit() {
    if (this.elRef) {
      const elem  = this.elRef.nativeElement;
      if (elem) {
        const button = (elem as HTMLElement).querySelector('button');
        if (button) {
          setTimeout(() => {
            (button as HTMLButtonElement).focus();
          }, 10);
        }
      }
    }
  }
  addRoll() {
    this.dataService.addItemToCart(Object.assign({}, this.roll, {
      glaze: this.selectedGlaze.value,
      units: this.selectedUnits.value
    }));
    this.selectedGlaze = null;
    this.selectedUnits = null;
    this.dataService.playAudio();
  }
}
