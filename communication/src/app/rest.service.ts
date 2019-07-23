import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  response$: Observable<IUser[]>;

  constructor(private http: HttpClient) {
    this.response$ = this.http.get<RawUser[]>('/assets/data.json').pipe(
      tap(d=>{
        console.log('before', d[0])
      }),
      map(users => {
        return users.map(user => ({
          ...user,
          ID: Number(user.ID)
        } as IUser))
      }),
      tap(d=>{
        console.log('after', d[0])
      }),
    );
  }

  get getResponse(): Observable<IUser[]> {
    return this.response$;
  }
}
