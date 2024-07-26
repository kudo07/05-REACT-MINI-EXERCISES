import React, { createContext, useEffect, useReducer, useState } from 'react';
import './style.css';
import TodoFilterForm from './TodoFilterForm';
import TodoList from './TodoList';
import { NewTodoForm } from './NewTodoForm';
const LOCAL_STORAGE_KEY = 'TODOS';
const ACTIONS = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  TOGGLE: 'TOGGLE',
  DELETE: 'DELETE',
};
function reducer(todos, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      return [
        ...todos,
        { name: payload.name, completed: false, id: crypto.randomUUID() },
      ];
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, completed: payload.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== payload.todoId);

    case ACTIONS.UPDATE:
      return todos.map((todo) => {
        console.log(payload);
        console.log(todo.id, 'todo.id', payload.id, 'payload.id');
        if (todo.id === payload.id) {
          return { ...todo, name: payload.name };
        }
        return todo;
      });
    default:
      throw new Error(`No action found for ${type}`);
  }
}
export const TodoContext = createContext();
const AppTodo = () => {
  const [filterName, setFilterName] = useState('');
  const [hideCompletedFilter, setHideCompletedFilter] = useState(false);
  const [todos, dispatch] = useReducer(reducer, [], (initailValue) => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value === null) {
      return initailValue;
    }
    return JSON.parse(value);
  });
  const filterTodos = todos.filter((todo) => {
    if (hideCompletedFilter && todo.completed) return false;
    return todo.name.includes(filterName);
  });
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  function addNewTodo(name) {
    dispatch({ type: ACTIONS.ADD, payload: { name } });
  }
  function toggleTodo(todoId, completed) {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: todoId, completed } });
  }
  function updateTodoName(id, name) {
    console.log(typeof id, 'here updatetodoname');
    dispatch({ type: ACTIONS.UPDATE, payload: { id, name } });
  }
  function deleteTodo(todoId) {
    dispatch({ type: ACTIONS.DELETE, payload: { todoId } });
  }
  return (
    <TodoContext.Provider
      value={{
        todos: filterTodos,
        addNewTodo,
        toggleTodo,
        updateTodoName,
        deleteTodo,
      }}
    >
      <TodoFilterForm
        name={filterName}
        setName={setFilterName}
        hideCompletedFilter={hideCompletedFilter}
        setHideCompletedFilter={setHideCompletedFilter}
      />
      <TodoList />
      <NewTodoForm />
    </TodoContext.Provider>
  );
};

export default AppTodo;
