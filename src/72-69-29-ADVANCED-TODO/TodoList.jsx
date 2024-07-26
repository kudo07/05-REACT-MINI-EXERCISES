import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from './AppTodo';

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <ul id="list">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </ul>
  );
};

export default TodoList;
