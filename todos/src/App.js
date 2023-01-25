import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers/todoReducer';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import { clearCompleted, toggleEdit } from './actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import { AppStyled } from './styles/appStyled';
import Header from './components/header';

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
    <AppStyled>
      <Header/>
      <div className="main">
        <div className="controls">
          <FontAwesomeIcon id="add-task" icon={faPenToSquare} onClick={handleToggle} alt="Add new task"/>
          {state.editing ? ("") : (<FontAwesomeIcon id="clear-complete" icon={faTrashCan} onClick={handleClear} alt="Clear completed tasks"/>)}
        </div>
        {!state.editing ? (
        <div>
          <TodoList state={state} dispatch={dispatch} />
        </div>) : (
        <div>
          <TodoForm dispatch={dispatch}/>
        </div>)}
      </div>
      <Tooltip anchorId="clear-complete" content="Clear Completed Tasks" place="bottom" effect="static"/>
      <Tooltip anchorId="add-task" content={!state.editing ? "Add A new Task" : "Cancel"} place="bottom" effect="static"/>
    </AppStyled>
  );
}

export default App;
