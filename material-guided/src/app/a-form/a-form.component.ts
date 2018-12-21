import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-a-form',
  templateUrl: './a-form.component.html',
  styleUrls: ['./a-form.component.css']
})
export class AFormComponent {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
}
