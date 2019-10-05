import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  array: any[];
  winner = false;
  color = 'green';
  max = 24;
  clickCounter = 0;
  score = 0;
  @Input() title: string;

  ngOnInit() {
    this.array = Array(this.max).fill('e');
    const flag = Math.floor(Math.random() * this.max);
    this.array[flag] = 't';
  }

  onClick(tile: string) {
    this.clickCounter++;
    if (tile === 't') {
      this.color = 'red';
      this.isWinner();
    } else {
      this.color = 'orange';
    }
  }

  isWinner() {
    this.winner = true;
    this.score = this.clickCounter;

    this.reset();
  }

  reset() {
    this.clickCounter = 0;
  }
}
