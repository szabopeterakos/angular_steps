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
  filteredMovies: IMovie[];

  constructor(private service: JsonServiceService, private messageService: SearchService) {
    this.messageService.getMessage().subscribe(m => {
      console.log(m.text);
      this.filterValue = m.text;
      this.filteredMovies = this.filteredByYear(this.movies, this.filterValue);
    });
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => { this.movies = data; this.filteredMovies = this.movies; },
    );
  }

  filteredByYear(data: IMovie[], year: string): IMovie[] {
    if (year === undefined || year === '') {
      return this.movies;
    }
    return data.filter((movie: IMovie) => movie.year === year);
  }

}
