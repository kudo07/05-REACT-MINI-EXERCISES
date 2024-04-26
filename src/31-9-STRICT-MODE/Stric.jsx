import React, { useEffect } from 'react';
let glovalVars = 0;
const Child = () => {
  glovalVars = glovalVars + 1;
  console.log(glovalVars);
  useEffect(() => {
    console.log('Mount');
    return () => {
      console.log('Unmount');
    };
  });
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Child;
