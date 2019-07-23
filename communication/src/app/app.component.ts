import { Component } from '@angular/core';
import { DataService } from 'src/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'communication';
  constructor(private ds: DataService){
    ds.get_rawData().subscribe(console.log);
  }
}
