import { useState } from 'react';

const ARRAY = [
  { name: 'mirdual', age: 23 },
  { name: 'shrey', age: 25 },
];

export default function Search() {
  const [array, setArray] = useState(ARRAY);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    const filteredArray = ARRAY.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setArray(filteredArray);
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => handleChange(e)}
        style={{ border: '1px solid' }}
        placeholder="enter"
      />
      <button onClick={handleClick} style={{ border: '1px solid' }}>
        Search
      </button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            <table>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{item.name}</td>
                </tr>
                <tr>
                  <td>Age:</td>
                  <td>{item.age}</td>
                </tr>
              </tbody>
            </table>
          </li>
        ))}
      </ul>
    </div>
  );
}
