import { useState } from 'react';

const TodoListItem = ({ children, isCompleted }) => {
  const [input, setInput] = useState('');
  const [state, setstate] = useState('');
  const handleShow = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  const showData = () => {
    setstate(input);
  };
  return (
    <div>
      <label>
        <input type="checkbox" />
        {isCompleted ? children : null}
      </label>

      <label>
        <input value={input} onChange={(e) => handleShow(e)} />
        <button onClick={showData}>show me</button>
        <p>hello this is after the button click {state}</p>
      </label>
    </div>
  );
};

export default TodoListItem;
