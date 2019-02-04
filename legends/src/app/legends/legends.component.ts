import { Component, OnInit } from '@angular/core';
import { Legend } from '../legend';
import { LIST_OF_LEGENDS } from '../mock-legends';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.css']
})
export class LegendsComponent implements OnInit {

  legend : Legend = LIST_OF_LEGENDS[2];
  constructor() { }

  ngOnInit() {
  }

}
