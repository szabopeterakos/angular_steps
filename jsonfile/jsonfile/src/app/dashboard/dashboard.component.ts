import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../json-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  movies;

  constructor(private service: JsonServiceService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => { this.movies = data; }
    );
  }

}
