import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.scss']
})
export class GoogleChartComponent implements OnInit {
  chart = {
    title: "myTitle",
    type: "ColumnChart",
    width: 600,
    data: [
      ['London', 8136000],
      ['New York', 8538000],
      ['Paris', 2244000],
      ['Berlin', 3470000],
      ['Kairo', 19500000]],
    columnNames: ['City', 'Inhabitants'],
    options: {
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      is3D: true,
      animation: {
        duration: 1000,
        easing: 'out',
      },
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
