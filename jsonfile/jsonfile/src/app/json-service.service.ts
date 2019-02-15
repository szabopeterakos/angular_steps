import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IMovie } from './models/movie';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {
  // tslint:disable-next-line:max-line-length
  url = 'https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-in-theaters.json?fbclid=IwAR0o8IRTpjrxJdcw3wxi7Ag_OLmuQX0BFDvZ2YenfrCuJIwUEgXHq-UCJjY';
  urlMock = '../public/mock-data/movies.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.urlMock).pipe(
      tap(
        console.log
      )
    );
  }
}
