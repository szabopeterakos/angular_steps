import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TileComponent } from './tile/tile.component';
import { NavPanelComponent } from './nav-panel/nav-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TileComponent,
    NavPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
