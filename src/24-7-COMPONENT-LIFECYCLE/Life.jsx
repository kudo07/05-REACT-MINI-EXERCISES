import React, { useState } from 'react';
import Child from './Child';

const Life = () => {
  const [isShown, setIsShown] = useState(true);
  const childComponent = isShown ? <Child /> : null;
  return (
    <div>
      <button
        style={{ display: 'block', marginBottom: '1rem' }}
        // onClick={() => setIsShown(!isShown)}
        onClick={() => setIsShown((s) => !s)}
      >
        Show / Hide
      </button>
      {childComponent}
    </div>
  );
};

export default Life;
