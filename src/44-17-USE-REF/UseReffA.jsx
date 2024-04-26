import { useEffect, useRef, useState } from 'react';

const UseReffA = () => {
  const [name, setName] = useState('');
  // useRef
  const inputRef = useRef();
  inputRef.current.focus();
  //   gives the undefined on the first render the value is didnt assign so it gives undefined
  // so we wrap into the useEffect to acces it in the first time

  useEffect(() => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
    //   }, [name]);
  }, []);
  //   when the name change it display every char

  return (
    <div>
      <label>
        Name:
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </div>
  );
};

export default UseReffA;
