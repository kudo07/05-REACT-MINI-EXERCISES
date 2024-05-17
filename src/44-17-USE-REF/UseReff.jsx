import { useEffect, useRef, useState } from 'react';
// persist data in different renders in the states and props
// we know that when the state changes the re-renders happens
//we want to store data without causing the components to re-render the idea is useRef
// useRef and useState are work in the same way
let ref =
  'changable wheneve the Name changes in every n times in the components ';
// replace in button nameRef into ref this globa; valriable not tight in component anyway
// renders 7 in this app change one of them change all of them
// tight with re-rendering
//useRef is tighly coupled so it doesnt matter how many app component i have each of them has
// seperate useRef reference to this useRef change it ha own its own and didnt connect with other app component
//change individual component
// none of them are affected by changes
// causing no re-render when chaging the useRef

const UseReff = () => {
  const [name, setName] = useState('');
  // useRef
  const nameRef = useRef('firstName');
  nameRef.current = 'secondName';

  console.log(nameRef.current);
  useEffect(() => {
    console.log('this is after the useRef re-render');
  });
  return (
    <div>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => (nameRef.current = Math.random())}>
          {/* ref take the final value after giving input doesnt take immediately, state take immediately which causes re-render */}
          ChangeRef
        </button>
        <button onClick={() => console.log(nameRef.current)}>PrintRef</button>
      </label>
    </div>
  );
};

export default UseReff;
