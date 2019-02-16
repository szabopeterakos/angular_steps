import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../json-service.service';
import { IMovie } from '../models/movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  filterValue: string;
  movies: IMovie[];

  constructor(private service: JsonServiceService) {
    this.filterValue = '2017';
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => { this.movies = this.filteredByYear(data, this.filterValue); }
    );
  }

  filteredByYear(data: IMovie[], year: string): IMovie[] {
    return data.filter((movie: IMovie) => movie.year === year);
  }

}
