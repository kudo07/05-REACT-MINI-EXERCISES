import { useState } from 'react';

const UseCallbackA = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  function printName(name) {
    console.log(`Name:${name}`);
  }
  return (
    <div>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
    </div>
  );
};

export default UseCallbackA;
