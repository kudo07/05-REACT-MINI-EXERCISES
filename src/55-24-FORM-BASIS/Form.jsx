import { useState } from 'react';
import './style.css';
import TodoItem from './TodoItem';
const Form = () => {
  const [newTodoName, setNewTodoName] = useState();
  const [todos, setTodos] = useState([]);
  // adding a todo
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodoName === '') {
      return;
    }
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
      ];
    });
    setNewTodoName('');
  };
  // deleting the todo
  const deleteTodo = (todoId) => {
    setTodos((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== todoId);
    });
  };
  // toggling the todo
  const toggleTodo = (todoId, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((currentTodo) => {
        if (currentTodo.id === todoId) {
          return { ...currentTodo, completed };
        }
      });
    });
  };
  return (
    <>
      <ul id="list">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          );
        })}
      </ul>
      <form onSubmit={addTodo} id="new-Todo-Form">
        <label htmlFor="todo-input">New Todo Name</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default Form;
