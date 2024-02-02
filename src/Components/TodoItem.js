import React, { useState } from 'react';
import '../Css/TodoItem.css';

const TodoItem = ({ todo, editTodo, removeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const [editedDate, setEditedDate] = useState(todo.date);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleEditSave = () => {
    if (editedText.trim() !== '') {
      editTodo(todo._id, editedText, editedDate);
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <input
            type="text"
            value={editedDate}
            placeholder="Date"
            onChange={(e) => setEditedDate(e.target.value)}
          />
          <button className="edit-btn" onClick={handleEditSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <div>
            <strong>{todo.text}</strong>
            <br />
            <em className="date">{todo.date}</em>
          </div>
          <div>
            <button className="edit-btn" onClick={handleEditToggle}>
              Edit
            </button>
            <button className="remove-btn" onClick={() => removeTodo(todo._id)}>
              Remove
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
