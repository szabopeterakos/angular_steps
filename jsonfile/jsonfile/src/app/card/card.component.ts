import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../models/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input() movie: IMovie;

  constructor() { }

  ngOnInit() {
  }

}
