import { Printable } from './printable'
import { ToDo } from './todo'
import { Domino } from './domino'
// The domino should have the following string representation: Domino A side: 3, B side: 2
//The todo should have the following string representation: Task: Buy milk | Priority: high | Done: true

let dominoes: Domino[]= [];
let todos: ToDo[]= [];
let domino = new Domino(3, 4);
let task = new ToDo('Buy Milk', 'high', true);
todos.push(task);
dominoes.push(domino);



for (let domino of dominoes) {
    domino.printAllFields();
  }
  
  for (let todo of todos) {
    todo.printAllFields();
  }

