import React from 'react';
import { ToDo } from './ToDo/ToDo';
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      { note: 'First todo to do of the day!', status: 0 },
      { note: 'First completed todo!', status: 1 }
    ],
    showTopics: false
  };

  switchFormInput = event => {
    this.setState({
      todos: { note: event.target.value, status: 0 }
    });
  };

  completedTask = event => {
    this.setState({
      todos: { note: this.state.note, status: event.target.value }
    });
  };

  deleteTopicsHandler = () => {
    const todos = [...this.state.todos];
    this.setState({ todos: todos });
  };

  render() {
    return (
      <div>
        <button onClick={}>Add Task:</button>
        <input changed={this.switchFormInput} />
        <hr />
        <p>Added Tasks:</p>
        <p>Click to make complete:</p>
        <ToDo
          click={() => this.completedTask()}
          changed={this.switchFormInput}
        />
        //if status = 1, show the todos as list: //also add:
        <p>Completed tasks:</p>
        <p>Click to delete:</p>
        <ToDo click={() => this.deleteTopicsHandler()} />
      </div>
    );
  }
}

export default App;
