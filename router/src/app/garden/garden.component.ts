import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card';
import { Observable, Subscription } from 'rxjs';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {
  title = 'GARDEN';
  uniqCards: Card[] = [
    { id: 1, color: 'aquamarine', isHidden: true },
    { id: 2, color: 'blanchedalmond', isHidden: true },
    { id: 3, color: 'cadetblue', isHidden: true }
  ];
  board: Card[] = [];
  state: any;

  tryFirst;
  trySecond;
  score = 0;

  constructor(private cardService: MatchService) { }

  ngOnInit() {
    this.board = this.randomOrder(this.uniqCards);
    this.cardService.getMessage().subscribe((m) => {
      this.state = m;
      if (this.tryFirst === undefined) {
        this.tryFirst = this.state;
      } else {
        this.trySecond = this.state;
        // TODO: first and second is the same
        if (this.tryFirst.target.id === this.trySecond.target.id) {
          console.log('match :)');
          this.score++;
        } else {
          console.log('not really :(');
        }
        this.clearTriesState();
      }
    });
  }
  clearTriesState() {
    this.tryFirst = undefined;
    this.trySecond = undefined;
  }

  randomOrder(array: Card[]) {
    array = [...array, ...array];
    const length = array.length;
    const order: Card[] = [];
    array.forEach(card => {
      let random: number;
      do {
        random = Math.floor(Math.random() * Math.floor(length));
      } while (order[random] != null);
      order[random] = card;
    });
    return order;
  }

}
