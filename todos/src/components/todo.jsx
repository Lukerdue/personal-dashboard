import React from 'react';
import { TodoStyled } from '../styles/todoStyled';

function Todo(props){
    const { todo } = props;
    return(
        <TodoStyled>
            <div  className={(todo.completed ? "completed" : "")}>
                <p>{todo.text}</p>
            </div>
        </TodoStyled>)
}
export default Todo