import React, { useState } from 'react';

const Child = () => {
  const [name, setName] = useState('');
  return (
    <div style={{ display: 'flex', margin: '10px', padding: '20px' }}>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      My name is {name}
    </div>
  );
};

export default Child;
