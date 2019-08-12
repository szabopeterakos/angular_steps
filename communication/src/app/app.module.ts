import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreenComponent } from './green/green.component';
import { BlueComponent } from './blue/blue.component';
import { YellowComponent } from './yellow/yellow.component';
import { OrangeComponent } from './orange/orange.component';
import { WhiteComponent } from './white/white.component';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AwesomeTooltipComponent } from './tooptip/tooptip.component';
import { AwesomeTooltipDirective } from './tooptip/tooptip.directive';

@NgModule({
  declarations: [
    AppComponent,
    GreenComponent,
    BlueComponent,
    YellowComponent,
    OrangeComponent,
    WhiteComponent,
    AwesomeTooltipDirective,
    AwesomeTooltipComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    OverlayModule
  ],
  entryComponents: [AwesomeTooltipComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
