import { Component } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'ToDo App';
  items: FirebaseListObservable<any[]>;


  constructor(private db: AngularFireDatabase) {
    this.items = db.list('/items');
    console.log('AppComponent Initialized');
  }
}
