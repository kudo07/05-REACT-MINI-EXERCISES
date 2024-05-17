import React, { useEffect, useRef, useState } from 'react';

const Combine = () => {
  const nameRef = useRef();
  useEffect(() => {
    console.log('render');
  });
  //
  // const [inp, setInp] = useState('');
  // const handleChange = (e) => {
  //   setInp(e.target.value);
  // };
  //
  const handleSubmit = (e) => {
    const inp = nameRef.current.value;
    e.preventDefault();
    if (inp === '') return;
    alert(`Name is : ${inp}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" ref={nameRef} />
      {/* <input type="text" id="name" value={inp} onChange={handleChange} /> */}
      <br />
      <br />
      <br />
      <button type="submit">Alert</button>
    </form>
  );
};

export default Combine;
