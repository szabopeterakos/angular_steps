import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const NGX_BOOTSTRAP = [
  BsDropdownModule.forRoot(),
  AccordionModule.forRoot(),
  CarouselModule.forRoot(),
  PopoverModule.forRoot(),
  BsDatepickerModule.forRoot(),
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NGX_BOOTSTRAP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
