import { Component, OnInit, Input } from '@angular/core';
import { IDot } from '../app.component';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss']
})
export class DotComponent implements OnInit {
  @Input() value: any;
  @Input() index: number;

  constructor() {}

  ngOnInit() {
    if (this.value) {
      console.log('hey', this.value);
    }
  }
}
