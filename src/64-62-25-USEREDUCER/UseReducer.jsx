import { useReducer, useState } from 'react';
function reducer(count, action) {
  switch (action.type) {
    case 'DECREMENT':
      return count - 1;
    case 'INCREMENT':
      return count + 1;
    case 'RESET':
      return 0;
    case 'CHANGE_COUNT':
      return count + action.payload.value;

    default:
      return count;
  }
}
const UseReducer = ({ initialCount = 0 }) => {
  // reducer function will work the specific tak for the task
  const [count, dispatch] = useReducer(reducer, initialCount);

  //   useReducer(reducer, initialCount, () => {
  //     return count + 1;
  //   });

  return (
    <>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
      <button
        onClick={() =>
          dispatch({ type: 'CHANGE_COUNT', payload: { value: 6 } })
        }
      >
        +6
      </button>
    </>
  );
};

export default UseReducer;
