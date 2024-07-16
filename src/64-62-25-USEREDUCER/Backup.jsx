import { useState } from 'react';

const UseReducer = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };
  const handleClickMinus = () => {
    setCount((currentCount) => {
      return currentCount - 1;
    });
  };

  return (
    <>
      <button onClick={handleClickMinus}>-</button>
      {count}
      <button onClick={handleClick}>+</button>
    </>
  );
};

export default UseReducer;
