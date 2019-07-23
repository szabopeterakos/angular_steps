import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  users$: Observable<IUser[]>;

  constructor(private http: HttpClient) {
    this.users$ = this.http.get<RawUser[]>('/assets/data.json').pipe(
      tap(d => {
        console.log('before', d[0])
      }),
      map(users => {
        return users.map(user => ({
          ...user,
          ID: Number(user.ID)
        } as IUser))
      }),
      tap(d => {
        console.log('after', d[0])
      }),
      catchError(err => {
        alert(`Some error occuerd, sorry :)`)
        console.log('error in source. Details: ', err);
        throw err;
      })
    );
  }

  get getUsers(): Observable<IUser[]> {
    return this.users$;
  }
}
