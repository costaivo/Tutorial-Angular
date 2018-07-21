import { Component, OnInit } from '@angular/core';

import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos;
  text;
  appState = 'default';
  oldText;

  constructor(private _todoservice: TodoService) { }

  ngOnInit() {
    console.log("Init TodosComponent");
    this.todos = this._todoservice.getTodos();
  }

  addTodo() {
    console.log(this.text);
    var newTodo = {
      text: this.text
    }

    this.todos.push(newTodo);
    //Clear the value
    this.text ="";
    this._todoservice.addTodo(newTodo);
  }

  deleteTodo(todoText: string) {
    console.log("Deleting Todo's :" + todoText);
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == todoText) {
        this.todos.splice(i, 1);
      }
    }
    this._todoservice.deleteTodo(todoText);
  }

  editTodo(todo){
    this.appState="edit";
    this.text = todo.text;
    this.oldText = todo.text;
  }

  updateTodo(){
     for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == this.oldText) {
        this.todos[i].text = this.text;
      }
    }
    this._todoservice.updateTodo(this.oldText,this.text);
  }
}


