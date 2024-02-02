import React, { Component } from 'react';
import TodoItem from './TodoItem';
import '../Css/TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = () => {
    if (this.state.newTodo.trim() !== '') {
      const currentDate = new Date().toLocaleDateString();
      const currentTime = new Date().toLocaleTimeString();
      const newTodoItem = {
        text: this.state.newTodo,
        id: Date.now(),
        date: `${currentDate} ${currentTime}`,
      };

      this.setState((prevState) => ({
        todos: [...prevState.todos, newTodoItem],
        newTodo: '',
      }));
    }
  };

  editTodo = (id, newText, newDate) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, date: newDate } : todo
      ),
    }));
  };

  removeTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    return (
      <div className="todo-container">
        <h1>Todo List</h1>
        <div className="todo-form">
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleInputChange}
            placeholder="Add a new todo"
          />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <ul className="todo-list">
          {this.state.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={this.editTodo}
              removeTodo={this.removeTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
