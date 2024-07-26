import React, { useState } from 'react';

const Storage = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue((predefined) => {
      return predefined - 1;
    });
  };
  const handleClickP = () => {
    setValue((predefined) => {
      return predefined + 1;
    });
  };
  return (
    <>
      <button onClick={handleClick}>-</button>
      {value}
      <button onClick={handleClickP}>+</button>
      <button onClick={() => setValue(0)}>Reset</button>
    </>
  );
};

export default Storage;
