import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Firebase Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todo.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent, TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // import and configure firebase app
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // Required for database features
    AngularFireDatabaseModule,
    // Required for Auth features
    AngularFireAuthModule,
  ],
  providers: [TodoService,],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('App Module Initialized');
  }
}
