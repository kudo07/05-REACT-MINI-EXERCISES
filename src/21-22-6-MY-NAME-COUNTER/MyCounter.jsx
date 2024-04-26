import { useState } from 'react';

const MyCounter = () => {
  const [name, setName] = useState('');
  const [actualName, setActualName] = useState('');
  const [counter, setCounter] = useState(0);
  //   got uncontrolled if we didnt use the empty strings

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleSetName = () => {
    setActualName(name);
  };
  const handleButtonAge = () => {
    setCounter((counterAge) => {
      return counterAge + 1;
    });
  };
  const handleButtonAge1 = () => {
    setCounter((counterAge) => {
      if (counterAge === 0) {
        return counterAge;
      }
      return counterAge - 1;
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={handleChangeName}
      />
      <button
        style={{ margin: '10px', color: 'purple' }}
        // onClick={() => handleSetName()} same thing in below in the arrow function we should invoke it otherwise
        // it wont run
        onClick={handleSetName}
      >
        Submit
      </button>

      <div style={{ display: 'flex' }}>
        <button
          style={{ height: '50px', width: '50px' }}
          onClick={handleButtonAge}
        >
          +
        </button>
        <button
          style={{
            margin: '4px',
            padding: '10px',
            color: 'orange',
            outline: 'none',
          }}
        >
          {counter}
        </button>
        <button
          style={{ height: '50px', width: '50px' }}
          onClick={handleButtonAge1}
        >
          -
        </button>
      </div>
      <p style={{ color: 'darkred', padding: '20px', margin: '20px' }}>
        My name is {actualName} and age is {counter}
      </p>
    </div>
  );
};

export default MyCounter;
