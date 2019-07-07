import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.less']
})
export class RestComponent implements OnInit {
  memes: [];

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.getProducts().subscribe(d=>{
      this.memes = d.data.memes;
      console.log('response',d.data.memes);
    });
  }

}
