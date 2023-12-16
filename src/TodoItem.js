import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onToggle, onEdit, onRemove }) => {
  return (
    <div className="todo-item">
      <div className="task-container">
        <input
          className="checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={`task-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
      </div>
      <div>
        <button className="edit-btn" onClick={() => onEdit(todo.id)}>Edit</button>
        <button className="remove-btn" onClick={() => onRemove(todo.id)}>Remove</button>
      </div>
    </div>
  );
};

export default TodoItem;
