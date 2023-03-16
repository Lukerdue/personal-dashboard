import React from 'react';
import TodoList from './components/todos/todoList';
import { AppStyled } from './styles/appStyled';
import Header from './components/header';

function App() {
  
  return (
    <AppStyled>
      <Header/>
      <div className="main"> 
        <TodoList />
      </div>
    </AppStyled>
  );
}

export default App;
