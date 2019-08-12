import { Component } from '@angular/core';
import { AwesomeTooltipComponent } from './tooptip/tooptip.component';
import { AwesomeTooltipDirective } from './tooptip/tooptip.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'communication';
}
