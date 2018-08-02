import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: [
             { description: "Walk the cat", isCompleted: true },
             { description: "Throw the dishes away", isCompleted: false },
             { description: "Buy new dishes", isCompleted: false }
               ],
                newToDoDescription: " "
      };
  }

    handleChange(e) {
      //targets value attribute in text input
      this.setState({ newToDoDescription: e.target.value })
    }

    handleSubmit(e) {
      //prevents page from reloading after clicking submit
      e.preventDefault();
      if (!this.state.newToDoDescription) { return }
      //todo with an unchecked checkbox
      const newTodo = { description: this.state.newToDoDescription, isCompleted: false };
      //list of todos plus added todo
      this.setState({ todos: [...this.state.todos, newTodo], newToDoDescription: " " });
    }

    toggleComplete(index) {
      const todos = this.state.todos.slice();
      const todo = todos[index];
      todo.isCompleted = todo.isCompleted ? false : true;
      this.setState({ todos: todos })

    }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo,index) =>
            <ToDo key={ index }
            description={ todo.description }
            isCompleted={ todo.isCompleted }
            toggleComplete={ () => this.toggleComplete(index) }/>
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e)}>
          <input type="text"
          value={ this.state.newToDoDescription }
          onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
