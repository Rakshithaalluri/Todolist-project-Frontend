import React, { useState, useEffect } from 'react';
import './TodoList.css'

const TodoList = ({ token }) => {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({ description: '', status: '' });

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('http://localhost:3000/todos', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setTodos(data);
        } else {
          alert('Failed to fetch todos');
        }
      } catch (error) {
        alert('Failed to fetch todos');
      }
    };

    fetchTodos();
  }, [token]);

  const handleAddTodo = async () => {
    let formIsValid = true;
    let errors = { description: '', status: '' };

    if (description === '') {
      errors.description = 'Description is required';
      formIsValid = false;
    }
    if (status === '') {
      errors.status = 'Status is required';
      formIsValid = false;
    }

    setErrors(errors);

    if (formIsValid) {
      try {
        const response = await fetch('http://localhost:3000/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ description, status }),
        });
        if (response.ok) {
          const newTodo = await response.json();
          setTodos([...todos, newTodo]);
          setDescription('');
          setStatus('');
        } else {
          alert('Failed to add todo');
        }
      } catch (error) {
        alert('Failed to add todo');
      }
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setTodos(todos.filter((todo) => todo.id !== id));
      } else {
        alert('Failed to delete todo');
      }
    } catch (error) {
      alert('Failed to delete todo');
    }
  };

  return (
    <div className="todo-container">
      <h2>Manage Your To-Do List</h2>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="todo-input"
        />
        {errors.description && <div className="error-message">{errors.description}</div>}
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="todo-input"
        />
        {errors.status && <div className="error-message">{errors.status}</div>}
        <button onClick={handleAddTodo} className="todo-button">Add Task</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className='task'>{todo.description} - {todo.status}</span>
            <button onClick={() => handleDeleteTodo(todo.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
