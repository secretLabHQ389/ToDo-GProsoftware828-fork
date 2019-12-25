import React from 'react';
import UniqueId from 'react-html-id';
import { ToDo } from './ToDo/ToDo';
import { Completed } from './Completed/Completed';
import './App.css';
import Plus from './assets/graphics/Plus.svg';

const App = () => {
  const [todos, setTodos] = useState();
  const [completed, setCompleted] = useState();

  async const addItem = (e) => {
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
        setTodos({
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

  return (
    <div>

    </div>
  )
};
export default App;
