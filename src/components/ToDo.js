import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return(
      <li>
<<<<<<< HEAD
        <input type="checkbox" checked={ this.props.isCompleted } />
=======
        <input type="checkbox"
        checked={ this.props.isCompleted }
        onChange={ this.props.toggleComplete }/>
>>>>>>> checkpoint-react-todo-events
        <span>{ this.props.description }</span>
      </li>
    );
  }
}

export default ToDo;
