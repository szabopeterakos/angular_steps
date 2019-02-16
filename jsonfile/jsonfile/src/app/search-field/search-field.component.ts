import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.less']
})
export class SearchFieldComponent implements OnInit {
  value;

  constructor(private messageService: SearchService) { }

  ngOnInit() {
  }

  sendMessage(m: string): void {
    this.messageService.sendMessage(m);
  }

}
