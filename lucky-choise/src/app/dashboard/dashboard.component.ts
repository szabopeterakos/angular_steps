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
  @Input() title;

  ngOnInit() {
    this.array = Array(this.max).fill('e');
    const flag = Math.floor(Math.random() * this.max);
    this.array[flag] = 't';
    console.log('TCL: DashboardComponent -> array', this.array);
  }

  onClick(tile: string) {
    if (tile === 't') {
      this.color = 'red';
      this.isWinner();
    } else{
      this.color = 'orange';
    }
    console.log('TCL: DashboardComponent -> hover -> tile', tile);
  }
  isWinner() {
    this.winner = true;
    console.log(
      'TCL: DashboardComponent -> isWinner -> this.winner',
      this.winner
    );
  }
}
