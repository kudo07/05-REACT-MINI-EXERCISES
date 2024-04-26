import { useState } from 'react';
import DisplayString from './DisplayString';

const Render = ({ favoriteNumber }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleButton = () => {
    setAge((prev) => {
      return prev + 1;
    });
    setAge((prev) => {
      return prev + 1;
    });
  };
  return (
    <div>
      <input type="text" value={name} onChange={(e) => handleChange(e)} />
      <br />
      <br />
      <button>-</button>
      <br />
      <br />
      {age}
      <button onClick={handleButton}>+</button>
      <br />
      <br />
      {favoriteNumber != null && `my favoprite number is ${favoriteNumber}`}
      <DisplayString name={name} age={age} />
    </div>
  );
};

export default Render;
