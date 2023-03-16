import React, { useState } from "react";
import Todo from './todo';
import { TodoListStyled } from '../styles/todoListStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import TodoForm from './todoForm';
import { useLocalStorage } from "../util/useLocalStorage";


const initialTodos = [
    {text: 'Walk the Dog',
     id: 13,
     completed: false},
    {text: 'Clean Out the Fridge',
     id: 14,
     completed: false},
    {text: 'Do the Dishes',
     id: 15,
     completed: false}]

function TodoList(){
    const [editing, setEditing] = useState(false);
    const [todos, setTodos] = useLocalStorage('todos', initialTodos);

    function handleToggle (e){
        e.preventDefault();
        setEditing(!editing);
      }
    
      function handleClear(e){
        e.preventDefault();
        setTodos(todos.filter(todo=> todo.completed === false));
      }

      function toggleCompleted(completed){
        setTodos(todos.map(todo=>{if(completed.id === todo.id){return completed}else{return todo}}));
      }

      function handleAddTodo(newTodo){
        const newList = [...todos, newTodo]
        setTodos(newList);
        setEditing(false);
      }

    return(
        <TodoListStyled>
            <div className="extra-border">
                <div className="list-header">
                <div className="list-desc">
                    <h2>Your Tasks</h2>
                    {!editing ? (<p>Tap to complete</p>) : ("")}
                </div>
                <div className="controls">
          <FontAwesomeIcon id="add-task" icon={faPenToSquare} onClick={handleToggle} alt="Add new task"/>
          {editing ? ("") : (<FontAwesomeIcon id="clear-complete" icon={faTrashCan} onClick={handleClear} alt="Clear completed tasks"/>)}
        </div>
        </div>{!editing ? (
                <div className="list-todos">
                    {todos.map(todo=>{return <Todo toggleCompleted={toggleCompleted} todo={todo} key={todo.id}/>})}
                </div>) : (
                    <div>
                        <div className="list-form">
                            <TodoForm handleAddTodo={handleAddTodo}/>
                        </div>
                        <div className="list-todos adding">
                            {todos.map(todo=>{return <Todo toggleCompleted={toggleCompleted} todo={todo} key={todo.id}/>})}
                        </div>
                    </div>
                )}
            </div>
            <Tooltip anchorId="clear-complete" content="Clear Completed Tasks" place="bottom" effect="static"/>
            <Tooltip anchorId="add-task" content={!editing ? "Add A new Task" : "Cancel"} place="bottom" effect="static"/>
        </TodoListStyled>)
}
export default TodoList