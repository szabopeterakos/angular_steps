import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() storyline: string;
  @Input() actors: string[];
  @Input() imageUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
