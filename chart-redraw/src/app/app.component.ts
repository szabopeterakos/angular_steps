import { Component, OnInit } from '@angular/core';
import * as embed from 'vega-embed';
import { Spec } from 'vega';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'chart-redraw';

  chartData =
    [{ "year": 1850, "age": 0, "sex": 1, "people": 1483789 },
    { "year": 1850, "age": 0, "sex": 2, "people": 1450376 },
    { "year": 1850, "age": 5, "sex": 1, "people": 1411067 },
    { "year": 1850, "age": 5, "sex": 2, "people": 1359668 },
    { "year": 1850, "age": 10, "sex": 1, "people": 1260099 },
    { "year": 1850, "age": 10, "sex": 2, "people": 1216114 },
    { "year": 1850, "age": 15, "sex": 1, "people": 1077133 },
    { "year": 1850, "age": 15, "sex": 2, "people": 1110619 }];

  ngOnInit() {
    const options: embed.EmbedOptions = {
      renderer: 'svg'
    };
    embed.default('#vis', this.yourVlSpec, options).then(
      ()=>{
        const svgElement2 = document.querySelectorAll(".mark-rect.role-mark.marks path")[2];
        svgElement2.style.stroke = "green";
        const svgElement0 = document.querySelectorAll(".mark-rect.role-mark.marks path")[0];
        console.log(svgElement0);
        svgElement0.style.stroke = "red";
        svgElement0.style.fill = "red";

        var svg = document.querySelectorAll(".mark-rect.role-mark.marks")[0]; //Get svg element
        var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
        newElement.setAttribute("d", "M 10 10 L 10 25"); //Set path's data
        newElement.style.stroke = "gray"; //Set stroke colour
        newElement.style.strokeWidth = "15px"; //Set stroke width
        svg.appendChild(newElement);

        let yaxisnumbers = document.querySelectorAll(".mark-group.role-axis")[2].querySelectorAll('.mark-text.role-axis-label')[0];
        var newElement2 = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
        newElement2.setAttribute("d", "M 10 10 L 100 25"); //Set path's data
        newElement2.style.stroke = "orange"; //Set stroke colour
        newElement2.style.strokeWidth = "15px"; //Set stroke width
        yaxisnumbers[0].appendChild(newElement2);

      }
    );


    console.log();
  }

  yourVlSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v3.json",
    description: "A bar chart showing the US population distribution of age groups in 2000.",
    width: 220,
    height: 220,
    data: {
      values: this.chartData
    },
    transform: [{ filter: "datum.year == 1850" }],
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
