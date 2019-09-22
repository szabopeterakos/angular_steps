import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.less']
})
export class OrangeComponent implements OnInit {

  number: number = 0;
  show: boolean =  false;

  constructor() { }

  ngOnInit() {
  }

  clickHandler(){
    this.number += 1;
    console.log(`click activated`)
  }

  hoverHandler(){
    this.number = 0;
    this.show = true;
    console.log(`hover activated`)
  }

  hoverOffHandler(){
    this.show = false;
    console.log(`hover Off activated`)
  }
}
