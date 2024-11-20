import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    // TODO: Implement the map function to iterate over the todos array 
    // and render each todo as a Todo component.
    // Each Todo component should receive the todo object as a prop.

    return (
      <div className="todo-list-container">
        <h1 className="todo-title">My To-Do List</h1>
        <ul className="todo-list">
          {this.props.todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;

