import { Component, AfterViewInit, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'bun-bun-prototype';
  audioEl: HTMLAudioElement = null;
  canPlayAudio = false;
  constructor(private dataService: DataService) {
    this.audioEl = document.createElement('audio');
    this.audioEl.src = 'assets/definite.mp3';
  }
  ngOnInit() {
    this.dataService.audioPlay$.subscribe(() => {
      if (this.canPlayAudio) {
        this.playAudio();
      }
    });
  }
  ngAfterViewInit() {
    this.canPlayAudio = true;
  }
  playAudio() {
    this.audioEl.play();
  }
}
