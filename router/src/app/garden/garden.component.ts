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
  uniqCards: string[] = ['aquamarine', 'blanchedalmond', 'cadetblue'];
  board: string[] = [];
  sampleCard: Card;

  ngOnInit() {
    this.sampleCard = { id: 1, color: 'green', isHidden: true } as Card;
    this.board = this.randomOrder(this.uniqCards);
  }

  randomOrder(array: string[]) {
    array = [...array, ...array];
    const length = array.length;
    const order: string[] = [];
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
