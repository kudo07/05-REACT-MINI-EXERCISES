import { useState } from 'react';

const Array = () => {
  // 1
  const [array, setArray] = useState(['a', 'b', 'c']);
  // 2
  const [input, setInput] = useState('');
  // 3
  const [addInput, setAddInput] = useState('');
  // 4
  const [addInputEnd, setAddInputEnd] = useState('');
  // 8
  const [index, setIndex] = useState('');
  const [element, setElement] = useState('');

  // functions 1
  const removeFirst = () => {
    // setArray(array.slice(1));
    setArray(array.filter((_, index) => index != 0));
    // in filter is also iterate over each element in the array
  };
  // function -2
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const removeSpecific = () => {
    const letterToRemove = input;
    const updatedArray = array
      .map((item) => item.replace(new RegExp(letterToRemove, 'g'), ''))
      .filter((item) => item.trim() !== ''); // Filter out empty strings
    setArray(updatedArray);
    setInput('');
  };
  // function -3
  const handleChangeAdd = (e) => {
    setAddInput(e.target.value);
  };
  const addStart = () => {
    setArray([addInput, ...array]);
    setAddInput('');
  };
  // 4
  const handleChangeEnd = (e) => {
    setAddInputEnd(e.target.value);
  };
  const addEnd = () => {
    setAddInputEnd(array.push(addInputEnd));
    setAddInputEnd('');
  };
  // 5
  const clearArray = () => {
    console.log(array);
    setArray([]);
  };
  // 6
  const resetArray = () => {
    setArray(['a', 'b', 'c']);
  };

  // 7
  const updateH = () => {
    setArray(array.map((item) => (item === 'a' ? 'h' : item)));
  };
  // 8
  const handleIndex = (e) => {
    setIndex(e.target.value);
  };
  const handleElement = (e) => {
    setElement(e.target.value);
  };
  const handlePush = () => {
    // console.log(index, element);
    // if (index === 0) {
    //   setArray([element, ...array]);
    // }
    // if (index == array.length - 1) {
    //   setArray()
    // }
    // a using splice
    // if (index >= 0 && index <= array.length) {
    //   array.splice(index, 0, element);
    //   setArray(array);
    //   setElement('');
    //   setIndex('');
    // } else {
    //   console.log('invalid index');
    // }
    // b using without methods
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i === parseInt(index)) {
        newArray.push(element);
      }
      newArray.push(array[i]);
    }
    if (parseInt(index) === array.length) {
      newArray.push(element);
    }
    setArray(newArray);
    setIndex('');
    setElement('');
  };
  return (
    <div>
      {/* 1 */}
      <button onClick={removeFirst}>remove-first</button>
      {/* 2 */}
      <input
        value={input}
        onChange={handleChange}
        style={{ marginLeft: '10px' }}
      />
      <button onClick={removeSpecific}>remove-specific</button>
      {/* 3 */}
      <input
        style={{ marginLeft: '10px' }}
        value={addInput}
        onChange={handleChangeAdd}
      />
      <button onClick={addStart}>add-start</button>
      {/* 4 */}
      <input
        style={{ marginLeft: '10px' }}
        value={addInputEnd}
        onChange={handleChangeEnd}
      />
      <button onClick={addEnd}>add-end</button>
      {/* 5 */}
      <button style={{ marginLeft: '10px' }} onClick={clearArray}>
        clear
      </button>
      {/* 6 */}
      <button style={{ marginLeft: '10px' }} onClick={resetArray}>
        reset
      </button>
      {/* 7 */}
      <button style={{ marginLeft: '10px' }} onClick={updateH}>
        Update
      </button>
      {/* 8 */}
      <input
        type="text"
        placeholder="enter the index"
        style={{ marginLeft: '10px' }}
        value={index}
        onChange={handleIndex}
      />
      <input
        type="text"
        placeholder="enter the element"
        value={element}
        onChange={handleElement}
      />
      <button onClick={handlePush}>Insert</button>
      {array}
      {array.map((value, index) => (
        <h1 key={index}>{value}</h1>
      ))}
    </div>
  );
};

export default Array;
