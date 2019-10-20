import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GardenComponent } from './garden/garden.component';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    GardenComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
