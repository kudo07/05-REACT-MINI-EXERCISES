import { useEffect, useState } from 'react';
// let global;
const Intro = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const person = { name };
  //   const [width, setWidth] = useState(window.innerWidth);
  //   global = global + 1;
  //   it is not the peer function
  useEffect(() => {
    // console.log('age is change', { age });
    // window.addEventListener('resize', () => {
    //   console.log('here');
    //   setWidth(window.innerWidth);

    console.log(person);
    //

    // });
    // const handler = () => {
    //   console.log(name);
    // };
    // document.addEventListener('click', handler);
    // return () => {
    //   document.removeEventListener('click', handler);
    // };
  }, [person]);
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
      {/* {width} */}
    </div>
  );
};

export default Intro;
