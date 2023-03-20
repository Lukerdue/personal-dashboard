import React from 'react';
import TodoList from './components/todos/todoList';
import { AppStyled } from './styles/appStyled';
import Header from './components/header';
import CalculatorMod from './components/calculator/calculatorMod';

function App() {
  
  return (
    <AppStyled>
      <Header/>
      <div className="main"> 
      <div className="row">
        <TodoList />
        <CalculatorMod />
        </div>
      </div>
    </AppStyled>
  );
}

export default App;
