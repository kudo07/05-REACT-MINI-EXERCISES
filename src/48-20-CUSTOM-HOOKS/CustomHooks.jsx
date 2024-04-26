import { useState } from 'react';
import { useToggle } from './useToggle';
//you can only use hooks in the function component
// orinside of the custom hook
// custom hook "use" start
// setValue is the funtion in the state snippet

const CustomHooks = () => {
  // const [query, setQuery] = useState('');
  // 2=
  const query = useInput('');

  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDarkMode, toggleHook] = useToggle(false);

  console.log(query);
  return (
    <div
      style={{
        background: isDarkMode ? '#333' : 'white',
        color: isDarkMode ? 'white' : 'black',
      }}
    >
      <label>
        Query:
        {/* <input value={query} onChange={setQuery} /> */}
        {/* <input {...query} /> */}
        <input value={query.value} onChange={query.onChange} />
      </label>
      <br />
      <button
        style={{
          background: isDarkMode ? 'white' : 'black',
          color: isDarkMode ? 'black' : 'white',
        }}
        onClick={toggleHook}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

// function useToggle(initialValue) {
//   const [value, setValue] = useState(initialValue);
//   function toggle() {
//     setValue((currentValue) => !currentValue);
//   }
//   return [value, toggle];
// }

// ṃy version
// function useInput(inititalValue) {
//   const [value, setValue] = useState(inititalValue);
//   function takeInput(e) {
//     setValue(e.target.value);
//   }
//   return [value, takeInput];
// }

// standard
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return { value, onChange: (e) => setValue(e.target.value) };
}
export default CustomHooks;
