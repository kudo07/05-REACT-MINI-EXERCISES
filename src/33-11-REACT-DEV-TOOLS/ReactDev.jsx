import { useState } from 'react';

const ReactDev = () => {
  const [animals, setAnimals] = useState([
    'ant',
    'bison',
    'camel',
    'duck',
    'elephant',
    'ant',
    'bison',
    'camel',
    'duck',
    'elephant',
  ]);
  const handleChange = () => {
    setAnimals((prevAnimals) => prevAnimals.slice(3));
    console.log(animals);
    // Second update: Set animals to contain elements from index 4 to 6 of the previous state
    setAnimals((prevAnimals) => prevAnimals.slice(4, 7));
    console.log(animals);
  };

  return (
    <>
      <button onClick={handleChange}>click</button>
      <p>{animals}</p>;
    </>
  );
};

export default ReactDev;
