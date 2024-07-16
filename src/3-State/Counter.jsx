// import React, { useState } from 'react';

// const Counter = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div onClick={() => setCounter((currentCount) => currentCount + 1)}>
//       {counter}
//     </div>
//   );
// };

// export default Counter;
import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      {/* <button onClick={handleCounter()}></button> */}
      {/* it shows the error too many re-renders infinite loop as the it () it runs the function in every renders that why we use the callback function
      it makes the function invoke every time
      */}
      <button onClick={handleCounter}>counter</button>
      {/* works fine */}
      <p>counter-{counter}</p>
    </div>
  );
};

export default Counter;
