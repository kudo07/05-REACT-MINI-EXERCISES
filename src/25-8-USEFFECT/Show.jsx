import { useState } from 'react';
import IntroTwo from './IntroTwo';

const Show = () => {
  const [shown, setShown] = useState(true);
  const isShown = shown ? <IntroTwo /> : null;
  return (
    <div>
      <button onClick={() => setShown((currentState) => !currentState)}>
        Show/hide
      </button>
      {isShown}
    </div>
  );
};

export default Show;
