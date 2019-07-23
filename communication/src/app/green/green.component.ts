import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.less']
})
export class GreenComponent implements OnInit {

  title$: Observable<string>;

  constructor(private titleService: TitleService) {
    this.title$ = this.titleService.getTitle;
  }

  ngOnInit() {
  }

}
