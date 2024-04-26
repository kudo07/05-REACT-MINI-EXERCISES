const TodoItem = ({ name, completed, id, toggleTodo, deleteTodo }) => {
  {
    console.log(name);
  }
  return (
    <>
      <li className="list-item">
        <label className="list-item-label">
          <input
            checked={completed}
            type="checkbox"
            data-list-item-checkbox
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <span data-list-item-text>{name}</span>
        </label>
        <button onClick={() => deleteTodo(id)} data-button-delete>
          {/* we passed in the anonymous function which can invoke the 
          deleteTodo if we directly pass then it return an infitie error */}
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
