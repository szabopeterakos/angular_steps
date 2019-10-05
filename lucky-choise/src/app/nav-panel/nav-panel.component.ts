import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.less']
})
export class NavPanelComponent {

  @Input() winner;
}
