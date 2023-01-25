import React from "react";
import Todo from './todo';
import { TodoListStyled } from '../styles/todoListStyled';
import { clearCompleted, toggleEdit } from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';

function TodoList(props){
    const { state, dispatch } = props;

    function handleToggle (e){
        e.preventDefault();
        dispatch(toggleEdit());
      }
    
      function handleClear(e){
        e.preventDefault();
        dispatch(clearCompleted());
      }

    return(
        <TodoListStyled>
            <div className="extra-border">
                <div className="list-header">
                <div className="list-desc">
                    <h2>Your Tasks</h2>
                    <p>Tap to complete</p>
                </div>
                <div className="controls">
          <FontAwesomeIcon id="add-task" icon={faPenToSquare} onClick={handleToggle} alt="Add new task"/>
          {state.editing ? ("") : (<FontAwesomeIcon id="clear-complete" icon={faTrashCan} onClick={handleClear} alt="Clear completed tasks"/>)}
        </div>
        </div>
                <div className="list-todos">
                    {state.todos.map(todo=>{return <Todo dispatch={dispatch} todo={todo} key={todo.id}/>})}
                </div>
            </div>
            <Tooltip anchorId="clear-complete" content="Clear Completed Tasks" place="bottom" effect="static"/>
            <Tooltip anchorId="add-task" content={!state.editing ? "Add A new Task" : "Cancel"} place="bottom" effect="static"/>
        </TodoListStyled>)
}
export default TodoList