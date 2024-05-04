import React, { useState } from 'react';
import { useLocalStorageHook } from './useLocalStorageHook';

const UseLocalStorage = () => {
  const [firstName, setFirstName] = useLocalStorageHook('FIRST_NAME', '');
  // return JSON.parse(localValue);
  // means we get the value from the local storage and set it to the value from there and return [value,setValue] which equals [firstName,setFirstName]
  const [lastName, setLastName] = useLocalStorageHook('LAST_NAME', () => {
    return 'default';
  });
  const [hobbies, setHobbies] = useLocalStorageHook('HOBBIES', [
    'Programming',
    'Weight Lifting',
  ]);
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: '1rem',
        }}
      >
        <label>FIRST NAME</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: '1rem',
        }}
      >
        <label>LAST NAME</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>{hobbies.join(', ')}</div>
      <button
        onClick={() =>
          setHobbies((currentHobbies) => [...currentHobbies, 'New Hobby'])
        }
      >
        Addd Hobbey
      </button>
    </>
  );
};

export default UseLocalStorage;
