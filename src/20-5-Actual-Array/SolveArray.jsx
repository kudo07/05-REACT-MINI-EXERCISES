import React, { useState } from 'react';
const INITAIL_VALUE = ['A', 'B', 'C'];
const SolveArray = () => {
  const [array, setArray] = useState(['A', 'B', 'C']);
  const [num, setNum] = useState(0);
  const [input, setInput] = useState('');
  // if we use indefined the the onCHange become uncontrolled and we dont want that
  //   state changes
  // 1
  const stateChanges = () => {
    // A====>0=>3=>6=>9
    setNum((num) => {
      return num + 1;
    });
    setNum((num) => {
      return num + 1;
    });
    setNum((num) => {
      return num + 1;
    });
    // it immediately change the value and stored and when nex setter function call it takes the previous value

    // B==>
    // the preoblem is that in react states updates asynchronously when we call the state setter function setNum react schedules the
    // state update and doent updates immediately state performance reasons and to batch state updates together for better performance.
    //
    // 'num is 0 prev but now 1',
    // setNum((num) => num + 1);
    // setNum((num) => num + 1);
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);
    //in the whole the state is not updated it coiunted as 1 times as react batch them and set the value when the componenet renders
  };

  //2- remove first

  const removeFirstElement = () => {
    // cannot update the array
    setArray((currenArray) => {
      return currenArray.slice(1);
    });
  };
  //  3- remove specific letter
  const removeSpecificLetter = (letter) => {
    console.log('setArray', setArray);
    setArray((currenArray) => {
      console.log(currenArray);
      return currenArray.filter((element) => element !== letter);
      //   keep elements except the letter
    });
  };
  //4-add to start
  const addToStart = (letter) => {
    setArray((currenArray) => {
      return [letter, ...currenArray];
    });
  };
  // 5-add to-end
  const addToEnd = (letter) => {
    setArray((currenArray) => {
      return [...currenArray, letter];
    });
  };
  // 6-clear
  const clear = () => {
    setArray([]);
  };
  // 8-reset
  const reset = () => {
    setArray(INITAIL_VALUE);
  };
  //9-update to H
  const updateToH = () => {
    setArray((currenArray) => {
      return currenArray.map((item) => (item === 'A' ? 'H' : item));
    });
    // 10 add letter at specific index
  };
  const handleChangeOne = (e) => {
    setInput(e.target.value);
  };
  const handleShow = (element) => {
    setArray((currenArray) => {
      return [
        ...currenArray.slice(0, input),
        element,
        ...currenArray.slice(input),
      ];
      // we spread the currentarray otherwise it return [a,b],e,[d,e]
    });
  };
  return (
    <div>
      {/* 1 */}
      <button onClick={stateChanges}>state change-{num}</button>
      <br />
      <br />
      {/* 2 */}
      <button onClick={removeFirstElement}>Reemove-first</button>
      <br />
      <br />
      {/* 3 */}
      <button onClick={() => removeSpecificLetter('B')}>
        Reemove all B&aposs
        {/* when i call this function passes the sepecific letter */}
        {/* <button onClick={removeItem("b")}>Remove 'b'</button>
        in this removeItems call immediately when the component renders not the button clicked because onCLick expects 
        a function reference not a function call and removeItem("b") is a function cal not a function reference
        */}
        {/* in this case we wrap the removeItem inside the arraow function which prevents that the removeItem will not call immediately
        instead it will call when the button click because the arrow function is the one passed as the event handler to "onCLick"
        so the reason for wrapping on another function is to delay the execution of removeItem("b") until the button is clicked which is the desired behavior in this case
        */}
        {/* const handleClick = () => {
  functionName(value);
};

<button onClick={handleClick}>Click me</button> */}
      </button>
      <br />
      <br />
      {/* 4 */}
      <button onClick={() => addToStart('B')}>add in start</button>
      <br />
      <br />
      {/* 5 */}
      <button onClick={() => addToEnd('Z')}>add in end</button>
      <br />
      <br />
      {/* 6 */}
      <button onClick={clear}>Clear</button>
      <br />
      <br />
      {/* 7 */}
      <button onClick={reset}>Reset</button>
      <br />
      <br />
      {/* 8*/}
      <button onClick={updateToH}>Update to-H</button>
      <br />
      <br />
      {/* 9*/}
      <input
        type="text"
        value={input}
        onChange={handleChangeOne}
        placeholder="enter the index"
      />
      <br />
      <br />
      <button onClick={() => handleShow('E')}>add E at input index</button>
      <br />
      <br />

      {array.join(', ')}
    </div>
  );
};

export default SolveArray;
