import React, { useState } from 'react';

const Child = () => {
  const [value, setValue] = useState('');

  console.log('render child');
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Child;
