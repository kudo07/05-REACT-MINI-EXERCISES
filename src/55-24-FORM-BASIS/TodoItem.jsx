const TodoItem = ({ name, completed, id, deleteTodo, toggleTodo }) => {
  return (
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
      <button onClick={() => deleteTodo(id)}>delete</button>
    </li>
  );
};

export default TodoItem;
