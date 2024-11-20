import React, { Component } from 'react';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with an empty todos array
    this.state = {
      todos: []
    };
  }

  // Function to add a new todo to the list
  addTodo = (text) => {
    // Create a new todo object
    const newTodo = { text, completed: false };
    // Update the state with the new todo
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo]
    }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        {/* Pass the addTodo function to TodoForm */}
        <TodoForm addTodo={this.addTodo} />
        {/* Pass the todos array to TodoList */}
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
