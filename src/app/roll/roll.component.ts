import { Component, OnInit, Input, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.scss']
})
export class RollComponent implements OnInit, AfterViewInit {
  @Input() roll = null;
  glazeOptions = [
    { key: 'None', value: 'none'},
    { key: 'Vanilla Milk', value: 'vanilla-milk'},
    { key: 'Sugar Milk', value: 'sugar-milk'},
    { key: 'Double Choclate', value: 'double-choclate'}
  ];
  selectedGlaze = null;
  glazeSelectionOpen = false;
  unitOptions = [
    { key: '1', value: 1 },
    { key: '3', value: 3 },
    { key: '6', value: 6 },
    { key: '12', value: 12 },
  ];
  selectedUnits = null;
  unitSelectionOpen = false;
  constructor(private elRef: ElementRef) { }
  ngOnInit() {
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

}
