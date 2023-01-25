import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers/todoReducer';
import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import { clearCompleted, toggleEdit } from './actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';

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
      <FontAwesomeIcon id="add-task" icon={faPenToSquare} onClick={handleToggle} alt="Add new task"/>
      {state.editing ? ("") : (<FontAwesomeIcon id="clear-complete" icon={faTrashCan} onClick={handleClear} alt="Clear completed tasks"/>)}
      {!state.editing ? (
        <div>
          <TodoList state={state} dispatch={dispatch} />
        </div>) : (
        <div>
          <TodoForm dispatch={dispatch}/>
        </div>)}
        <Tooltip anchorId="clear-complete" content="Clear Completed Tasks" place="bottom" effect="static"/>
        <Tooltip anchorId="add-task" content={!state.editing ? "Add A new Task" : "Cancel"} place="bottom" effect="static"/>
    </div>
  );
}

export default App;
