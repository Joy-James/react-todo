import React, { useState } from 'react';
import TodoList from './components/todoList';

// import   './components/todo.css';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);


  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='App'>
       <div className='todo-list-container'> 
       
      <h1>Todo List</h1>
 
      <TodoList todos={todos} deleteTodo={deleteTodo} />  
    </div>
    </div>
  );
};

export default App;
