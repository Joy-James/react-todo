import React, { useState } from 'react';
import './todo.css';

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  const [isEditMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEditClick = () => {
    setEditMode(true);
    setEditedTitle(todo.title);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    editTodo(todo.id, editedTitle);
  };

  return (
    <div className='item'>
      <input type='checkbox' />
      {isEditMode ? (
        <input
          type='text'
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      {!isEditMode && (
        <button onClick={handleEditClick}>Edit</button>
      )}
      {!isEditMode && (
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      )}
      {isEditMode && (
        <button onClick={handleSaveClick}>Save</button>
      )}
    </div>
  );
};

export default TodoItem;
