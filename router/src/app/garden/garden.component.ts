import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {
  title = 'GARDEN';
  constructor() { }
  // uniqCards: string[] = ['aquamarine', 'blanchedalmond', 'cadetblue'];
  uniqCards: Card[] = [
    { id: 1, color: 'aquamarine', isHidden: true },
    { id: 2, color: 'blanchedalmond', isHidden: true },
    { id: 3, color: 'cadetblue', isHidden: true }
  ];
  board: Card[] = [];
  sampleCard: Card;

  ngOnInit() {
    this.sampleCard = { id: 1, color: 'green', isHidden: true } as Card;
    this.board = this.randomOrder(this.uniqCards);

    setTimeout(() => {
      console.log(this.board[0]);
    }, 0);
    setTimeout(() => {
      console.log(this.board[0]);
    }, 4000);
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
