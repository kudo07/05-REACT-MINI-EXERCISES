import { useEffect, useState } from 'react';

export function useLocalStorageHook(key, initialValue) {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    // query our local storage
    if (localValue === null) {
      // if the local value dont have the value for the key
      if (typeof initialValue === 'function') {
        return initialValue();
      } else {
        return initialValue;
        // used the value
      }
      //   we know that local value that have value
    } else {
      return JSON.parse(localValue);
    }
  });
  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
      //   sets the value on the value and local storage only store the string
    }
  }, [value, key]);
  return [value, setValue];
}
