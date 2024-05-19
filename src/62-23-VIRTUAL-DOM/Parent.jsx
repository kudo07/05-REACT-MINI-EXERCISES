import React from 'react';
import { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [number, setNumber] = useState(0);
  console.log('render parent');
  return (
    <div>
      <button onClick={() => setNumber((num) => num + 1)}>{number}</button>
      <Child />
    </div>
  );
};
// when i click the button counter parent and child both render due to updation but in child when i write input only child is render
// takes allt the code and store it in the memory somewhere thats the ideo of Vritual DOM
//what is the dom look like
//what u used toh have and what u have currently have
// so actual dom only shows the changes which is change no the entire thing taken directly from the code it take changes from the virtaul
// and shows only those things
//changes the actual dom by modifying the button of counter
// what the dom shoul a look like and wht the dom actually look like
// and only update the things which changes
// even though my app is re-running and child is re-running
//IT NOT PUTTING all the changes in the dom overriting everything
// when the input is write only the text is shown in the broser code not the all code is change
// 1- run all the whole code
// 2- display the changes in the ui
// 3- apply all changes which look like the old like

export default Parent;
