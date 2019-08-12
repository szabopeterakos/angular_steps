import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'awesome-tooltip',
  styleUrls: ['./tooptip.component.less'],
  templateUrl: './tooptip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AwesomeTooltipComponent {

  @Input() text = '';

  constructor(){
    console.log('tooltip created');
  }
}
