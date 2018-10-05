import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
  // tslint:disable max-line-length
  description = 'Chocolate bar cupcake chocolate cake gingerbread dessert lemon drops muffin chocolate tootsie roll. Chocolate cake tiramisu tootsie roll pudding lollipop. Pie topping apple pie marzipan sugar plum chocolate cake tootsie roll pudding liquorice. Icing fruitcake chocolate cake toffee sesame snaps sesame snaps ice cream pastry tiramisu. Liquorice jelly candy canes jelly beans pie. Sesame snaps sweet roll oat cake candy fruitcake. Tiramisu ice cream sesame snaps caramels. Liquorice topping icing chocolate bar cotton candy cotton candy jujubes sweet. Candy sugar plum marzipan tootsie roll dessert sugar plum icing. Fruitcake icing tootsie roll marzipan. Tiramisu liquorice pudding ice cream. Powder chupa chups cake. Carrot cake soufflé powder candy canes cake sweet roll. Caramels cake candy cake candy canes.';

  constructor(private dataService: DataService) { }
  ngOnInit () {
    this.dataService.orderConfirmationAvailable.next(false);
  }

  ngAfterViewInit() {
    const img = document.getElementById('landing_img');
    if (img) {
      (img as HTMLImageElement).addEventListener('load', () => {
        const backdrop = document.getElementById('backdrop');
        if (backdrop) {
          (backdrop as HTMLElement).classList.remove('hide');
        }
      });
    }
  }

}
