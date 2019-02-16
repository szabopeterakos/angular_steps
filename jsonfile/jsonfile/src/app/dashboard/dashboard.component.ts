import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../json-service.service';
import { IMovie } from '../models/movie';
import { SearchService } from '../search-field/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  filterValue: string;
  movies: IMovie[];

  constructor(private service: JsonServiceService, private messageService: SearchService) {
    // this.filterValue = '2017';
    this.messageService.getMessage().subscribe(m => {
      console.log(m.text);
      this.filterValue = m.text;
      this.movies = this.filteredByYear(this.movies, this.filterValue);
    });
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => { this.movies = data; }
    );
  }

  filteredByYear(data: IMovie[], year: string): IMovie[] {
    return data.filter((movie: IMovie) => movie.year === year);
  }

}
