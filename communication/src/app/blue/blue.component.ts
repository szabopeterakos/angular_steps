import { Component } from '@angular/core';
import { DataTransformationService } from '../data-transformation.service';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.less']
})
export class BlueComponent  {
  
  constructor(private dataTransformation: DataTransformationService) { }
  
  // users$ = this.dataTransformation.getAll;
  users$ = this.dataTransformation.getTop3;

}
