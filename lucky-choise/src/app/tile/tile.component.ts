import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.less']
})
export class TileComponent implements OnInit {
  @Input() state: 'empty' | 'treasure';
  @Input() color: string;

  constructor() {}

  ngOnInit() {}
}
