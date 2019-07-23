import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreenComponent } from './green/green.component';
import { BlueComponent } from './blue/blue.component';
import { YellowComponent } from './yellow/yellow.component';
import { OrangeComponent } from './orange/orange.component';
import { WhiteComponent } from './white/white.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GreenComponent,
    BlueComponent,
    YellowComponent,
    OrangeComponent,
    WhiteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
