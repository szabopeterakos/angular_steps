import { Component, OnInit, Input } from '@angular/core';
import { Card } from './card.model';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  constructor(private cardService: MatchService) { }

  ngOnInit() {
    setTimeout(() => {
      this.card.isHidden = false;
    }, 1000);
  }

  onClick() {
    this.card.isSelected = !this.card.isSelected;
    this.cardService.sendMessage({ target: this.card });
  }
}
