import React from 'react';
import UniqueId from 'react-html-id';
import { ToDo } from './ToDo/ToDo';
import { Completed } from './Completed/Completed';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    UniqueId.enableUniqueIds(this);
    this.state = {
      todos: [
        { title: 'note one', id: '231r' },
        { title: 'note two', id: 'efef' },
        { title: 'note three', id: 'sd09s' }
      ],
      message: '',
      completed: [{ title: '1', id: 'grhwg' }, { title: '2', id: '9joi' }]
    };
  }

  addItem(e) {
    e.preventDefault();
    const { todos } = this.state;
    const newItem = { title: this.newItem.value, id: this.nextUniqueId() };

    const isOnTheList = todos.includes(newItem);

    if (isOnTheList) {
      this.setState({
        message: 'This To-do is already on the list.'
      });
    } else {
      newItem !== '' &&
        this.setState({
          todos: [...this.state.todos, newItem],
          message: ''
        });
    }
    this.addForm.reset();
  }

  completedItem(item) {
    const newTodos = this.state.todos.filter(todo => {
      return todo !== item;
    });
    this.setState({
      completed: [...this.state.completed, item],
      message: 'Added to completed list',
      todos: [...newTodos]
    });
  }

  removeItem(item) {
    const newTodos = this.state.completed.filter(todo => {
      return todo !== item;
    });
    this.setState({
      completed: [...newTodos]
    });
  }

  render() {
    const { todos, message } = this.state;
    return (
      <div>
        <div className="CenterElems">
          <h1 className="banner">To Do List:</h1>
        </div>

        <form
          className="CenterElems"
          ref={input => (this.addForm = input)}
          onSubmit={e => {
            this.addItem(e);
          }}
        >
          <div>
            <label>Add New To-do Item</label>
            <br />
            <br />
            <input
              type="text"
              placeholder="Type To-do Here"
              id="newItemInput"
              ref={input => (this.newItem = input)}
              className="input"
            />
            <br />
            <button className="button" type="submit">
              Add
            </button>
          </div>
        </form>

        <div>
          {message !== '' && <p className="CenterElems">{message}</p>}

          <table className="Centered">
            <thead>
              <tr>
                <th>To-dos Not Completed:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.state.todos.map(item => (
                    <ToDo
                      click={() => this.completedItem(item)}
                      title={item.title}
                      key={item.id}
                    />
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="Centered">
            <thead>
              <tr>
                <th>To-dos Completed:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.state.completed.map(item => (
                    <Completed
                      click={() => this.removeItem(item)}
                      title={item.title}
                      key={item.id}
                    />
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
