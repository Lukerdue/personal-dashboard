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
      
      {!state.editing ? (
        <div>
          <TodoList state={state} dispatch={dispatch} />
        </div>) : (
        <div>
          <TodoForm dispatch={dispatch}/>
        </div>)}
        <button onClick={handleToggle}>Edit List</button>
        <button onClick={handleClear}>Clear Completed Tasks</button>
    </div>
  );
}

export default App;
