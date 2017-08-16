import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 3-rd Party Vendors
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todo.service';
import { environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent, TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('App Module Initialized');
  }
}
