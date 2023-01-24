import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers/todoReducer';
import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  
  function handleToggle (e){
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "TOGGLE_EDIT" });
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
    </div>
  );
}

export default App;
