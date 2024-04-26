import { useState } from 'react';
import TodoItem from './TodoItem';
import './style.css';
const Todo = () => {
  // states
  const [newTodoName, setNewTodoName] = useState('');
  const [todos, setTodos] = useState([]);

  // functions
  const handleChange = (e) => {
    setNewTodoName(e.target.value);
  };
  //add new todo
  const addNewTodo = () => {
    if (newTodoName === '') {
      return;
    }
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
      ];
    });
    setNewTodoName('');
  };
  // toggle todo
  const toggleTodo = (todoId, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoId) {
          console.log({ ...todo, completed });
          return { ...todo, completed };
          // completed:completed
        }
        return todo;
      });
    });
    // return the new array not change the original one
  };
  // delete todo
  const deleteTodo = (todoId) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <>
      {/* {JSON.stringify(todos)} */}
      <ul id="list">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          // onChange={(e) => setNewTodoName(e.target.value)}
          onChange={handleChange}
        />
      </div>
      <button onClick={addNewTodo}>Add Todo</button>
    </>
  );
};

export default Todo;
