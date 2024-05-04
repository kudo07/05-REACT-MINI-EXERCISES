import { useCallback, useState } from 'react';

export function useArray(initialValue) {
  const [array, setArray] = useState(initialValue);
  const push = useCallback((element) => {
    setArray((a) => [...a, element]);
    // return the new array
  }, []);
  // replace
  const replace = useCallback((index, newElement) => {
    setArray((a) => {
      return [...a.slice(0, index), newElement, ...a.slice(index + 1)];
    });
  }, []);
  //filter
  const filter = useCallback((callback) => {
    setArray((a) => {
      return a.filter(callback);
    });
  }, []);
  const remove = useCallback((index) => {
    setArray((a) => {
      return [...a.slice(0, index), ...a.slice(index + 1)];
    });
    // when the modification return
  }, []);
  const clear = useCallback(() => {
    setArray([]);
  }, []);
  const reset = useCallback(() => {
    setArray(initialValue);
    // no modification
    // simple pass in the parent one button no callback function
  }, [initialValue]);
  return { array, push, replace, filter, remove, clear, reset };
}
