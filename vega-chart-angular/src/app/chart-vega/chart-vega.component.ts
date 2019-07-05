import { Component, OnInit } from '@angular/core';
import * as embed from 'vega-embed';
import data from './data';
import { Spec } from 'vega';

@Component({
  selector: 'app-chart-vega',
  templateUrl: './chart-vega.component.html',
  styleUrls: ['./chart-vega.component.scss']
})
export class ChartVegaComponent implements OnInit {
  vega = embed;
  anotherFile = data;
  chartData = [{"year":1850,"age":0,"sex":1,"people":1483789},
  {"year":1850,"age":0,"sex":2,"people":1450376},
  {"year":1850,"age":5,"sex":1,"people":1411067},
  {"year":1850,"age":5,"sex":2,"people":1359668},
  {"year":1850,"age":10,"sex":1,"people":1260099},
  {"year":1850,"age":10,"sex":2,"people":1216114},
  {"year":1850,"age":15,"sex":1,"people":1077133},
  {"year":1850,"age":15,"sex":2,"people":1110619}];

  constructor() { }

  ngOnInit() {
    console.log('another:',this.anotherFile);
      embed.default('#vis', this.yourVlSpec);
  }

  yourVlSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v3.json",
    description: "A bar chart showing the US population distribution of age groups in 2000.",
    width: 120,
    height: 120,
    data: {
      values: this.anotherFile
    },
    transform: [{ filter: "datum.year == 2000" }],
    mark: "bar",
    encoding: {
      y: {
        field: "age", type: "ordinal",
      },
      x: {
        aggregate: "sum", field: "people", type: "quantitative",
        axis: { title: "population" }
      }
    },
  } as unknown as Spec;

}
