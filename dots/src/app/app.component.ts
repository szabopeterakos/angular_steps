import { Component, OnInit } from '@angular/core';
import { DotComponent } from './dot/dot.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dots';
  dots: IDot[] = [];
  colors = ['red', 'blue', 'orange'];

  ngOnInit(): void {
    for (let index = 0; index < 3;) {
      const dot = { i: ++index, c: this.colors[index - 1], s: false } as IDot;
      this.dots.push(dot);
    }
  }

  reset() {
    console.log('reset dots.s');
    this.dots.map(dot => {
      dot.s = false;
      // dot.c = 'green';
    });
  }
}

export interface IDot {
  i: number;
  c: string;
  s: boolean;
}
