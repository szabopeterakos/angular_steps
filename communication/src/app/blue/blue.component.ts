import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.less']
})
export class BlueComponent  {
  
  constructor(private rest: RestService) { }
  
  users$ = this.rest.getUsers;

}
