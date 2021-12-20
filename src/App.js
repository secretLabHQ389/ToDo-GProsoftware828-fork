import React, {useState, useMemo} from 'react'
import { ToDo } from './ToDo/ToDo'
import { Completed } from './Completed/Completed'
import ls from 'local-storage'
import './App.css'
import Plus from './assets/graphics/Plus.svg'

export const App = () => {
  const [state, setState] = useState({
    todos: ls.get('toDos') || [
      { title: 'note one', id: '231r' },
      { title: 'note two', id: 'efef' },
      { title: 'note three', id: 'sd09s' }
    ],
    message: '',
    completed: ls.get('completeds') || [
      { title: '1', id: 'grhwg' },
      { title: '2', id: '9joi' }
    ],
    showForm: false,
    showCompleted: false
  })

  const [newItem, setNewItem] = useState()

  const addItem = async (e) => {
    e.preventDefault()

    let titles = []
    state.todos.map(todo => {
      titles.push(todo.title)
    })

    const isOnTheList = titles.includes(newItem)
    const addedItem = { title: newItem, id: Math.random() }
    if (isOnTheList) {
      setState({...state,
        message: 'This To-do is already on the list.'
      })
    } else {
      setState({...state,
        todos: [...state.todos, addedItem],
        message: 'Added entry to to-do list'
      })
      await localStorage.setItem('toDos', JSON.stringify(state.todos))
    }
    await localStorage.setItem('toDos', JSON.stringify(state.todos))
    const store = await localStorage.getItem('toDos')
  }

  const completedItem = async (item) => {
    const newTodos = state.todos.filter(todo => {
      return todo !== item
    })
    if (1 === 1) {
      setState({...state,
        completed: [...state.completed, item],
        message: 'Added to completed list',
        todos: [...newTodos]
      })
      await localStorage.setItem(
        'completeds',
        JSON.stringify(state.completed)
      )
      await localStorage.setItem('toDos', JSON.stringify([...newTodos]))
    }
    await localStorage.setItem(
      'completeds',
      JSON.stringify(state.completed)
    )
    await localStorage.setItem('toDos', JSON.stringify([...newTodos]))
    const completedStore = await localStorage.getItem('completeds')
  }

  const removeItem = async (item) => {
    const newTodos = state.completed.filter(todo => {
      return todo !== item
    })
    if (1 === 1) {
      setState({...state,
        completed: [...newTodos],
        message: 'Deleted old to-do'
      })
      await localStorage.setItem('completeds', JSON.stringify([...newTodos]))
    }
    await localStorage.setItem('completeds', JSON.stringify([...newTodos]))
    const completedRemovals = await localStorage.getItem('completeds')
  }

  const toggleInputHandler = () => {
    const doesShow = state.showForm
    setState({...state, showForm: !doesShow })
  }

  const toggleCompletedHandler = () => {
    const doesShow = state.showCompleted
    setState({...state, showCompleted: !doesShow })
  }

  const { todos, completed, message } = state

  const memoTodoList = useMemo(() => todos.map(item => {
    return (
      <ToDo
        click={() => completedItem(item)}
        title={item.title}
        key={item.id}
      />)
  }),[todos])

  const memoCompletedList = useMemo(() => completed.map(item => {
    return (
      <Completed
        click={() => removeItem(item)}
        title={item.title}
        key={item.id}
      />)
  }),[completed])

  return (
    <div>
      <div className="header">
        <h1 className="banner">Your To-Do's</h1>
        <div className="instructions">
          Click the plus to add one. Click the todo itself to move lists or
          remove. Click 'Show Completed'.
        </div>
        <p className="msg">{message}</p>
        <img
          src={Plus}
          alt="plus_clickme_show_input_form"
          onClick={() => toggleInputHandler()}
          className="plus"
        />

        {state.showForm === true ? (
          <div className="inputForm">
            <form
              onSubmit={(e) => addItem(e)}
            >
              <div>
                <input
                  type="text"
                  placeholder="Type To-do Here"
                  id="newItemInput"
                  className="input"
                  value={newItem}
                  onChange={e => setNewItem(e.target.value)}
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
                {memoTodoList}
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className="completedBtn"
          onClick={() => toggleCompletedHandler()}
        >
          Show Completed
        </button>
        {state.showCompleted === true ? (
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    {memoCompletedList}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  )
}
export default App
