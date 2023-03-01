import React from 'react';
import { TodoStyled } from '../styles/todoStyled';

function Todo( props ){
    const { todo, toggleCompleted } = props;
    function handleComplete(e){
        e.preventDefault();
        toggleCompleted({...todo, completed: !todo.completed})
    }
    return(
        <TodoStyled >
            <div id={todo.id} onClick={handleComplete} className={(todo.completed ? "completed" : "")}>
                <p>{todo.text}</p>
            </div>
        </TodoStyled>)
}
export default Todo