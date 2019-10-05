import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{ value }}
    </p>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  theme = 'square';
  @Input() value: 'x' | 'o';
}
