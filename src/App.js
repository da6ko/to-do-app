import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: true },
  ]);

  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = () => {
    if (newTodo.trim() === '') {
      return;
    }

    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: newId, text: newTodo, completed: false },
    ]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setEditingTodo(id);
  };

  const saveEditedTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
    setEditingTodo(null);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <input
        className="todo-input"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="add-btn" onClick={addTodo}>
        Add Task
      </button>
      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onEditTodo={editTodo}
        onRemoveTodo={removeTodo}
      />
      {editingTodo && (
        <div>
          <input
            className="edit-input"
            type="text"
            defaultValue={todos.find((todo) => todo.id === editingTodo).text}
            onBlur={(e) => saveEditedTodo(editingTodo, e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default App;
