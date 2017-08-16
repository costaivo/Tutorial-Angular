import { Injectable } from '@angular/core';

import {Init} from './init-todos';

@Injectable()
export class TodoService extends Init {

  constructor() {
    super();
    console.log("Todo Service Initialized");
    this.load();
  }

  private getTodosFromRepository() {
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  private saveTodosInRepository(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  getTodos() {
    return this.getTodosFromRepository();
  }

  addTodo(newTodo) {
    var todos = this.getTodosFromRepository();

    //Add a new Todo item
    todos.push(newTodo);

    //save in local storage
    this.saveTodosInRepository(todos);

  }

  deleteTodo(todoText) {
    var todos = this.getTodosFromRepository();

    for (var i = 0; i < todos.length; i++) {
      if (todos[i].text == todoText) {
        todos.splice(i, 1);
      }

      //save in local storage
      this.saveTodosInRepository(todos);

    }
  }

   updateTodo(oldtext,newText) {
    var todos = this.getTodosFromRepository();

    for (var i = 0; i < todos.length; i++) {
      if (todos[i].text == oldtext) {
        todos[i].text = newText;
      }

      //save in local storage
      this.saveTodosInRepository(todos);

    }
  }
}
