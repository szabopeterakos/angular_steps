import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../models/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input() movie: IMovie;
  fixID: string;

  constructor() {
  }

  ngOnInit() {
    this.fixID = this.pad(this.movie.id, 3);
  }

  pad(num, size) {
    let s = num + '';
    while (s.length < size) { s = '0' + s; }
    return s;
  }

}
