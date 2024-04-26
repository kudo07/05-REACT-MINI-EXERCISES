import React, { useState } from 'react';

const InputList = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    setSubmittedName(name);
  };
  return (
    <div>
      <input value={name} onChange={handleChange} />
      <button onClick={handleSubmit}>submit</button>
      <label>{submittedName}</label>
    </div>
  );
};

export default InputList;
