import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return  [
      {
        id: 1,
        title: 'ToDo one',
        completed: false
      },
      {
        id: 2,
        title: 'ToDo two',
        completed: false
      },
      {
        id: 3,
        title: 'ToDo three',
        completed: true
      },
    ]
  }
}
