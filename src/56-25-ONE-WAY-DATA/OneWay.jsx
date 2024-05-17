import { useState } from 'react';
import Children from './Children';

const OneWay = () => {
  const [toggle, setToggle] = useState('dark');

  return (
    <div>
      <Children toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default OneWay;
