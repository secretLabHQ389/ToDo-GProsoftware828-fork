import React from 'react';
import UniqueId from 'react-html-id';
import { ToDo } from './ToDo/ToDo';
import { Completed } from './Completed/Completed';
import './App.css';
import Plus from './assets/graphics/Plus.svg';
import ls from 'local-storage';
import dog from './assets/images/dog.jpg';
import basket from './assets/images/basket.jpg';
import bunny from './assets/images/bunny.jpg';
import july4th from './assets/images/july4th.jpg';
import pumpkins from './assets/images/pumpkins.jpg';
import santa from './assets/images/santa.jpg';
import thanks from './assets/images/thanks.jpg';
import xmastree from './assets/images/xmastree.jpg';
import kangaroo from './assets/images/kangaroo.jpg';

export class App extends React.Component {
  constructor(props) {
    super(props);
    UniqueId.enableUniqueIds(this);
    this.state = {
      todos: ls.get('toDos') || [
        { title: 'Click on the Add icon above to show/hide the to-do form' },
        {
          title:
            'Then click on me to make it complete and check them at the button below'
        }
      ],
      message: '',
      completed: ls.get('completeds') || [
        { title: 'Imagine your task completed like me!' },
        { title: 'Click on me to delete forever!' }
      ],
      showForm: false,
      showCompleted: false
    };
  }

  async addItem(e) {
    e.preventDefault();
    let newItem = { title: this.newItem.value };
    const isOnTheList = this.state.todos.includes(newItem); //try destructuring here
    if (isOnTheList) {
      this.setState({
        message: 'This To-do is already on the list.'
      });
    } else {
      newItem =
        { title: this.newItem.value, id: this.nextUniqueId() } &&
        newItem !== '' &&
        this.setState({
          todos: [...this.state.todos, newItem],
          message: 'Added entry to to-do list'
        });
      await console.log(this.state.todos);
      await localStorage.setItem('toDos', JSON.stringify(this.state.todos));
    }
    this.addForm.reset();
    await localStorage.setItem('toDos', JSON.stringify(this.state.todos));
    await console.log(this.state.todos);
    const store = await localStorage.getItem('toDos');
    console.log(JSON.parse(store));
    const newTodos = JSON.parse(store);
    //this.setState({ todos: newTodos });
  }
  async completedItem(item) {
    const newTodos = this.state.todos.filter(todo => {
      return todo !== item;
    });
    if (1 === 1) {
      this.setState({
        completed: [...this.state.completed, item],
        message: 'Added to completed list',
        todos: [...newTodos]
      });
      await localStorage.setItem(
        'completeds',
        JSON.stringify(this.state.completed)
      );
      await localStorage.setItem('toDos', JSON.stringify([...newTodos]));
    }
    await localStorage.setItem(
      'completeds',
      JSON.stringify(this.state.completed)
    );
    await localStorage.setItem('toDos', JSON.stringify([...newTodos]));
    const completedStore = await localStorage.getItem('completeds');
    // this.setState({
    //   completedLS: [...completedStore]
    // });
    console.log('Here is get ');
    console.log(JSON.parse(completedStore));
  }
  async removeItem(item) {
    const newTodos = this.state.completed.filter(todo => {
      return todo !== item;
    });
    if (1 === 1) {
      this.setState({
        completed: [...newTodos],
        message: 'Deleted to-do from archived list'
      });
      await localStorage.setItem('completeds', JSON.stringify([...newTodos]));
    }
    await localStorage.setItem('completeds', JSON.stringify([...newTodos]));
    const completedRemovals = await localStorage.getItem('completeds');
    console.log(JSON.parse(completedRemovals));
  }
  toggleInputHandler = () => {
    const doesShow = this.state.showForm;
    this.setState({ showForm: !doesShow });
  };
  toggleCompletedHandler = () => {
    const doesShow = this.state.showCompleted;
    this.setState({ showCompleted: !doesShow });
  };
  render() {
    const { todos, message } = this.state;
    return (
      <div className="container">
        <div className="item1">
          <img src={dog} className="dog" alt="dog in ghost outfit" />
        </div>
        <div className="item2">
          <img
            src={pumpkins}
            className="pumpkins"
            alt="pumpkins and haybails on farm"
          />
        </div>
        <div className="item3">
          <img src={thanks} className="thanks" alt="thanksgiving spread" />
        </div>
        <div className="item4">
          <img src={basket} className="basket" alt="Easter basket" />
        </div>
        <div className="item5">
          <img
            src={xmastree}
            className="xmastree"
            alt="Christmas tree inside"
          />
        </div>
        <div className="item6">
          <img src={santa} className="santa" alt="Santa and Mrs. Claus" />
        </div>
        <div className="item7">
          <img
            src={july4th}
            className="july4th"
            alt="July fourth flag on star title"
          />
        </div>
        <div className="item8">
          <img
            src={bunny}
            className="bunny"
            alt="bunny in grass hears floppy"
          />
        </div>
        <div className="item-main">
          <div className="header">
            <h1 className="banner">Your To-Do's</h1>
            <p className="msg">{message}</p>
            <img
              src={Plus}
              alt="plus_clickme_show_input_form"
              onClick={this.toggleInputHandler}
              className="plus"
            />
            {this.state.showForm === true ? (
              <div className="inputForm">
                <form
                  ref={input => (this.addForm = input)}
                  onSubmit={e => {
                    this.addItem(e);
                  }}
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Type to-do here"
                      id="newItemInput"
                      ref={input => (this.newItem = input)}
                      className="input"
                    />
                    <br />
                    <br />
                    <button className="button" type="submit">
                      Add
                    </button>
                    <br />
                    <br />
                  </div>
                </form>
              </div>
            ) : null}
          </div>
          <div className="block">
            <table>
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
            <button
              className="completedBtn"
              onClick={this.toggleCompletedHandler}
            >
              Show/Hide Completed
            </button>
            {this.state.showCompleted === true ? (
              <div>
                <table>
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
                    <tr>
                      <p>I can do more to-do's, kangar-youu?</p>
                      <img
                        src={kangaroo}
                        className="kangaroo"
                        alt="friendly kangaroo"
                      />
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
