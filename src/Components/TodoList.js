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

  componentDidMount() {
    this.fetchTodos();
  }

  async fetchTodos() {
    try {
      const response = await fetch('http://localhost:8080/getTodos');
      const data = await response.json();

      if (data.success) {
        this.setState({ todos: data.todos });
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error fetching todos:', error.message);
    }
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = async () => {
    if (this.state.newTodo.trim() !== '') {
      const currentDate = new Date().toLocaleDateString();
      const currentTime = new Date().toLocaleTimeString();
      const newTodoItem = {
        text: this.state.newTodo,
        date: `${currentDate} ${currentTime}`,
      };

      try {
        const response = await fetch('http://localhost:8080/addTodo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTodoItem),
        });

        const data = await response.json();

        if (data.success) {
          this.fetchTodos();
          this.setState({ newTodo: '' });
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error('Error adding todo:', error.message);
      }
    }
  };

  editTodo = async (id, newText, newDate) => {
    try {
      const response = await fetch(`http://localhost:8080/editTodo/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newText, date: newDate }),
      });

      const data = await response.json();

      if (data.success) {
        this.fetchTodos();
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error editing todo:', error.message);
    }
  };

  removeTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/removeTodo/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        this.fetchTodos();
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error removing todo:', error.message);
    }
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
              key={todo._id}
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
