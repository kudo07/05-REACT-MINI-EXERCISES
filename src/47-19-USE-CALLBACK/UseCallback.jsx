import { useCallback, useEffect, useState } from 'react';

const UseCallback = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const printName = useCallback(
    // passed the function
    () => {
      console.log(`Name:${name}`);
    },
    [name]
  );
  // memoise the return of the useMemo
  // update when the name changes
  // in an empty dependency it updates only one time rest it will not updated
  //when the name changes it re-creates the function previously it creates the function in
  // every single time
  // whenever change when the name changes
  // useCallback==>dependency array
  // useMemo for the performance

  useEffect(() => {
    console.log('In effect');
    printName();
  }, [printName]);
  // so when the name input is typed the re-render happens and re-render
  // but when i increase the number re-render again happen which should not be happened
  // when the number increate component re-renders and it creates over and over agian re create everytime sinfgle time
  // so we wrap this in the useCallback works like useMemo difference is used for the memoisation

  return (
    <div>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
    </div>
  );
};

export default UseCallback;
