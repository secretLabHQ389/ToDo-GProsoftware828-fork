import React from 'react';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['note one', 'note two', 'note three'],
      message: '',
      completed: ['1', '2']
    };
  }

  addItem(e) {
    e.preventDefault();
    const { todos } = this.state;
    const newItem = this.newItem.value;

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
    const newTodos = this.state.completed.filter(todo => {
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
        <h1>To Do List:</h1>

        <form
          ref={input => (this.addForm = input)}
          onSubmit={e => {
            this.addItem(e);
          }}
        >
          <div>
            <label>Add New To-do Item</label>
            <input
              type="text"
              placeholder="Type To-do Here"
              id="newItemInput"
              ref={input => (this.newItem = input)}
            />
            <button type="submit">Add</button>
          </div>
        </form>

        <div>
          {message !== '' && <p>{message}</p>}

          <table>
            <thead>
              <tr>
                <th>To-dos Not Completed:</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map(item => {
                return (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>
                      <button
                        onClick={() => this.completedItem(item)}
                        type="button"
                      >
                        Completed
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>To-dos Completed:</th>
              </tr>
            </thead>
            <tbody>
              {this.state.completed.map(item => {
                return (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>
                      <button
                        onClick={() => this.removeItem(item)}
                        type="button"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
