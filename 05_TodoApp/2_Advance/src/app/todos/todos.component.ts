import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos;
  text;
  selectedItemkey;
  appState = 'default';
  oldText;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    console.log('Init TodosComponent');
    this.todos = this._todoService.getTodos();
  }

  addTodo() {
    console.log('adding new todo:' + this.text);

    this._todoService.addTodo(this.text);

    // Clear the value
    this.text = '';
  }

  deleteTodo(key: string) {
    console.log('Deleting Todos :' + key);
    this._todoService.deleteTodo(key);
  }

  editTodo(key, text) {
    console.log('Entering edit mode :' + key + ' text :' + text);
    this.appState = 'edit';
    this.text = text;
    this.selectedItemkey = key;
    this.oldText = text;
  }

  updateTodo() {
    console.log('Updating todo ' + this.selectedItemkey + ' text to :' + this.text);
    this._todoService.updateTodo(this.selectedItemkey, this.text);
    this.text = '';
    this.selectedItemkey = '';
  }
}


