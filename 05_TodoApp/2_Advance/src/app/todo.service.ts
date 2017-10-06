import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class TodoService {

  items: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    console.log('Todo Service Initialized');
    this.items = db.list('/items');
  }



  getTodos() {
    return this.items;
  }

  addTodo(newTodo) {
    this.items.push({ text: newTodo });
  }

  deleteTodo(key) {
    this.items.remove(key);
  }

  updateTodo(key, newText) {
    this.items.update(key, { text: newText });
  }
}
