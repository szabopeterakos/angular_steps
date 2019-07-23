
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title$: Observable<string>;

  constructor(private http: HttpClient) {
    this.title$ = of('Communication').pipe(
      tap(d => console.log('something', d))
    );
  }

  get getTitle(): Observable<string> {
    return this.title$;
  }
}