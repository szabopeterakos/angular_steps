import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dots';
  dots: IDot[] = [];
  colors = ['rgb(255, 0, 0, 0.4)', 'rgb(0, 0, 255, 0.4)', 'rgb(255, 165, 0, 0.4)'];
  colorNames = ['red', 'blue', 'orange'];

  ngOnInit(): void {
    for (let index = 0; index < 3; ) {
      const dot = { i: ++index, c: this.colors[index - 1], cc: this.colorNames[index - 1], s: false } as IDot;
      this.dots.push(dot);
    }
  }

  reset() {
    console.log('reset dots.s');
    this.dots.map(dot => {
      dot.s = false;
    });
  }
}

export interface IDot {
  i: number;
  c: string;
  cc: string;
  s: boolean;
}
