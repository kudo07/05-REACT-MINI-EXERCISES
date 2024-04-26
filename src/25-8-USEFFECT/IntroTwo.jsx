import { useEffect, useState } from 'react';

const IntroTwo = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  //   useEffect(() => {
  //     console.log('Re-render');
  //   });
  // it runs every time when the component renders

  //   useEffect(() => {
  //     console.log('Hi');
  //     return () => {
  // so when the unmount or hide the bye will appear in the console
  //       console.log('Bye');
  //     };
  // return function runs every single tme when the effect re-ran'
  //   }, []);
  //   empty array only once renders when unmount or hide
  // An empty dependency array means that the effect does not depend on any values from the component scope. Therefore, it should only run once after the initial render and not on any subsequent renders.

  //   useEffect(() => {
  //     console.log(`my name is ${name} and i am ${age} years old`);
  //   }, [name, age]);
  //   useEffect(() => {
  //     document.title = name;
  //   }, [name]);
  useEffect(() => {
    document.title = name;
    // setTimeout(() => {
    //   console.log(`My name is ${name}`);
    // }, 2000);
    // if we want to update the name not every single time then we remove the timeout if run yet
    const timeOut = setTimeout(() => {
      console.log(`My name is ${name}`);
    }, 2000);
    // now the full name display after 2 sec
    // in return we pass the function
    return () => {
      clearTimeout(timeOut);
    };
  }, [name]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      {age}
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      <p>
        My name is {name} and age is {age}
      </p>
    </div>
  );
};

// let global;

export default IntroTwo;
