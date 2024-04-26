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
