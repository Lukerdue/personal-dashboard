import React from "react";
import Todo from './todo';
import { TodoListStyled } from '../styles/todoListStyled'

function TodoList(props){
    const { state, dispatch } = props;
    return(
        <TodoListStyled>
            <h2>Your Tasks</h2>
            {state.todos.map(todo=>{return <Todo dispatch={dispatch} todo={todo} key={todo.id}/>})}
        </TodoListStyled>)
}
export default TodoList