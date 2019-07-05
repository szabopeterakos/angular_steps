import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { ChartContainerComponent } from './chart-container/chart-container.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { ChartVegaComponent } from './chart-vega/chart-vega.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { GoogleChartComponent } from './google-chart/google-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    ActionBarComponent,
    ChartContainerComponent,
    FooterComponent,
    ChartVegaComponent,
    GoogleChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    GoogleChartsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
