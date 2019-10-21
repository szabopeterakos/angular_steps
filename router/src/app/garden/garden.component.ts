import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card.model';
import { Observable, Subscription } from 'rxjs';
import { MatchService } from '../match.service';
import { distinct, tap, map, distinctUntilChanged } from 'rxjs/operators';
import { start } from 'repl';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {
  title = 'GARDEN';
  uniqCards: Card[] = [
    { color: 'aquamarine', isHidden: true, isSelected: false },
    { color: 'blanchedalmond', isHidden: true, isSelected: false },
    { color: 'cadetblue', isHidden: true, isSelected: false }
  ];
  board: Card[] = [];
  previousCard: any;

  tryFirst;
  trySecond;
  score = 0;

  constructor(private cardService: MatchService) { }

  ngOnInit() {
    this.board = this.randomOrder(this.uniqCards);
    this.cardService.getMessage().pipe(
      map(res => res.target),
    ).subscribe((currentCard) => {
      if (currentCard === this.previousCard) {
        return;
      }
      this.previousCard = currentCard;
      if (this.tryFirst === undefined) {
        this.tryFirst = currentCard;
      } else {
        this.trySecond = currentCard;
        // TODO: first and second is the same
        if (this.tryFirst.color === this.trySecond.color) {
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
    const cloned = array.map(x => Object.assign({}, x));
    array = array.concat([...cloned]);
    console.log('equal 0 and 3? ', array[0] === array[3]);
    const length = array.length;
    const order: Card[] = [];
    let startID = 1;
    array.forEach(card => {
      let random: number;
      do {
        random = Math.floor(Math.random() * Math.floor(length));
      } while (order[random] != null);
      order[random] = card;
      order[random].id = startID++;
    });
    console.log('TCL: GardenComponent -> randomOrder -> order', order);
    return order;
  }

}
