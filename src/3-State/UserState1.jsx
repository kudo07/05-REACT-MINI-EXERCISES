import { useState } from 'react';

const UserState = () => {
  //   const [state, setState] = useState('first');
  //   const [age, setAge] = useState(0);
  const [person, setPerson] = useState({ name: 'person', age: 0 });
  function handleClick() {
    // setPerson({ name: 'changed' });
    setPerson((currentPerson) => {
      return { ...currentPerson, name: 'changed' };
    });
  }
  //   console.log('render');
  //   const handleClick = () => {
  //     setState('changed');
  //     // console.log('Before', age);

  //     // setAge(age + 1);
  //     // console.log('after 1', age);

  //     // setAge(age + 1);
  //     // console.log('after 2', age);

  //     // setAge((currentAge) => {
  //     //   return currentAge + 1;
  //     // });
  //     // setAge((currentAge) => {
  //     //   return currentAge + 1;
  //     // });
  //     // age=>age+1
  //   };

  return (
    // <h1 onClick={handleClick}>
    //   helllo {state} {age}
    // </h1>
    <h1 onClick={handleClick}>
      hi {person.name}
      {person.age}
    </h1>
  );
};

export default UserState;
