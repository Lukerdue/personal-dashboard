import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers/todoReducer';
import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  
  function handleToggle (e){
    e.preventDefault();
    dispatch();
  }
  
  return (
    <div className="App">
      
      {!state.editing ? (
        <div>
          <TodoList state={state} dispatch={dispatch} />
          <button onClick={handleToggle}>Add Todo</button>
        </div>) : (
        <div>
          <TodoForm dispatch={dispatch}/>
          <button onClick={handleToggle}>Cancel</button>
        </div>)}
    </div>
  );
}

export default App;
