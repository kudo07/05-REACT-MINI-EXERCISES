import { useEffect, useState } from 'react';

const Rule = () => {
  const [count, setCount] = useState(0);
  //   very top ignore everything
  // hooks are  never called be conditionally or in other block in the functions
  // hooks never called in conditionally
  //   if (count > 5) {
  //     useEffect(() => {
  //       document.title = count;
  //     }, [count]);
  // React Hook "useEffect" is called conditionally. React Hooks
  // must be called in the exact same order in every component render
  //   }
  //   same exact order cannot be in for lopes or condition

  //
  useEffect(() => {
    document.title = count;
  }, [count]);
  //
  if (count > 5) {
    return 'hi';
  }
  //   below all the hooks other wise same error
  const Add = () => {
    setCount((count) => {
      return count + 1;
    });
  };
  return (
    <div>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      <button onClick={Add}>+</button>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
};

export default Rule;
