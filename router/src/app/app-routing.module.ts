import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GardenComponent } from './garden/garden.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  { path: '', component: CityComponent },
  { path: 'city', component: CityComponent },
  { path: 'garden', component: GardenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
