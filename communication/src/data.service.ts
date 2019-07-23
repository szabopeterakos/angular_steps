import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    rawData$: Observable<any>;

    constructor(private httpClient: HttpClient) {
        console.log('DataService Started');
          this.rawData$ = this.httpClient.get('./assets/data.json');
    }

    get_rawData(): Observable<any> {
        return this.rawData$;
    }

}