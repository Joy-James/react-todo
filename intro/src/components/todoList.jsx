
import TodoItem from './todoItem';
// import './todo.css'
import '../App.css'
import React, { useState } from 'react';

import TodoForm from './todoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([ ]);

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, updatedTitle) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: updatedTitle } : todo
    );
    setTodos(updatedTodos);
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoList;

