import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  array: any[];
  winner = false;
  color = 'green';

  ngOnInit() {
    this.array = Array(24).fill('e');
    this.array[3] = 't';
    console.log('TCL: DashboardComponent -> array', this.array);
  }

  onClick(tile: string) {
    if (tile === 't') {
      this.isWinner();
    }
    this.color = 'orange';
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
