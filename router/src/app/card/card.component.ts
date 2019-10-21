import { Component, OnInit, Input } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  isSelected = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.card.isHidden = false;
    }, 2000);
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }
}
