import React, { useContext, useRef, useState } from 'react';
import { TodoContext } from './AppTodo';

const TodoItem = ({ id, name, completed }) => {
  const { toggleTodo, deleteTodo, updateTodoName } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const nameRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    if (nameRef.current.value === '') {
      return;
    }
    console.log(id, 'id from todoitem');
    updateTodoName(id, nameRef.current.value);
    setIsEditing(false);
  }

  return (
    <li className="list-item">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" autoFocus defaultValue={name} ref={nameRef} />
          <button data-button-edit>Save</button>
        </form>
      ) : (
        <>
          <label className="list-item-label">
            <input
              type="checkbox"
              checked={completed}
              data-list-item-checkbox
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <span data-list-item-text>{name}</span>
          </label>
          <button data-button-edit onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button data-button-delete onClick={() => deleteTodo(id)}>
            delete
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
