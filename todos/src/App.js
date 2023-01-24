import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers/todoReducer';
import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import { clearCompleted, toggleEdit } from './actions/index';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  
  function handleToggle (e){
    e.preventDefault();
    dispatch(toggleEdit());
  }

  function handleClear(e){
    e.preventDefault();
    dispatch(clearCompleted());
  }
  
  return (
    <div className="App">
      <i class="fa-regular fa-pen-to-square" onClick={handleToggle}></i>
      {!state.editing ? (
        <div>
          <TodoList state={state} dispatch={dispatch} />
        </div>) : (
        <div>
          <TodoForm dispatch={dispatch}/>
        </div>)}
        
        {state.editing ? ("") : (<button onClick={handleClear}>Clear Completed Tasks</button>)}
    </div>
  );
}

export default App;
