import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers/todoReducer';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import { AppStyled } from './styles/appStyled';
import Header from './components/header';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  

  
  return (
    <AppStyled>
      <Header/>
      <div className="main"> 
        <TodoList state={state} dispatch={dispatch}/>
      </div>
    </AppStyled>
  );
}

export default App;
