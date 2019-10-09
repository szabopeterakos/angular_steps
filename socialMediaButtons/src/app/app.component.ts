import { Component } from '@angular/core';
import { faAngry, faHorse,faDiceOne,faFighterJet,faHatWizard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faAngry = faAngry;
  faHorse = faHorse;
  faDiceOne = faDiceOne;
  faFighterJet =faFighterJet;
  faHatWizard=faHatWizard;
  title = 'socialMediaButtons';
}
