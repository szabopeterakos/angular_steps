import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {TodoComponent} from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabase,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
