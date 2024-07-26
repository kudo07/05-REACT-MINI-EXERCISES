import React, { useMemo, useState } from 'react';

const Derived = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState('');
  const filteredItems = useMemo(() => {
    return inputValue === ''
      ? items
      : items.filter((item) => item < inputValue);
  }, [items, inputValue]);
  return (
    <>
      <label htmlFor="lessthan">Show less than</label>
      <input
        style={{ border: '1px solid' }}
        id="lessThan"
        type="number"
        onChange={(e) => setInputValue(e.target.valueAsNumber)}
        value={inputValue}
      />

      <br />

      <br />
      <div>{filteredItems.join(',')}</div>

      <br />
      <button
        style={{ background: 'black', color: 'pink' }}
        onClick={() => setItems((i) => [...i, 2.5])}
      >
        Add 2.5 on the list
      </button>
    </>
  );
};

export default Derived;
