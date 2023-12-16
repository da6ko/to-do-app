import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onToggleTodo, onEditTodo, onRemoveTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
          onEdit={onEditTodo}
          onRemove={onRemoveTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
