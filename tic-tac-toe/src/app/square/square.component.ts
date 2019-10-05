import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      square works!
    </p>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
