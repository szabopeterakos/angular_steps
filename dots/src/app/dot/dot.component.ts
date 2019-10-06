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
  isHidden = this.value ? this.value.s : false;

  constructor() { }

  ngOnInit() {
    if (this.value) {
      console.log('hey', this.value);
    }
  }

  clicked() {
    console.log('dot clicked : ', this.value);
    this.hideElement();
  }

  hideElement() {
    this.value.s = !this.value.s;
    // this.isHidden = !this.isHidden;
  }
}
