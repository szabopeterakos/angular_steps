import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { take, tap, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataTransformationService {

  private all$: Observable<IUser[]>;
  private top3$: Observable<IUser[]>;

  constructor(private rest: RestService) {
    this.all$ = this.rest.getUsers;
    this.top3$ = this.rest.getUsers.pipe(
      map(dataset => {
        return dataset.slice(0,3);
      }));
  }

  get getAll() {
    return this.all$;
  }

  get getTop3() {
    return this.top3$;
  }

}
