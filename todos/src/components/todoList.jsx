import React from "react";
import Todo from './todo';

function TodoList(props){
    const { state, dispatch } = props;
    return(
        <div className="todoList">
            {state.todos.map(todo=>{return <Todo dispatch={dispatch} todo={todo} key={todo.id}/>})}
        </div>)
}
export default TodoList