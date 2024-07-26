import React, { createContext, useEffect, useState } from 'react';
import Child from './Child';
//passing props to child then grandchild een without the use state in chidl he just act as mediator this is called props drilling
export const ThemeContext = createContext();
// default value
const Context = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleTheme() {
    setIsDarkMode((d) => !d);
  }
  useEffect(() => {
    document.body.style.background = isDarkMode ? '#333' : 'white';
    document.body.style.background = isDarkMode ? '#333' : 'white';
  }, [isDarkMode]);
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {/* provide value to the children */}
      <Child />
      <p style={{ color: isDarkMode ? 'white' : 'black' }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
        deserunt eveniet sapiente dicta incidunt deleniti! Laboriosam architecto
        ipsa a consectetur, praesentium quam vitae pariatur commodi, quibusdam
        quisquam eaque ducimus aperiam quaerat accusamus eius doloribus
        repudiandae expedita est. Quia tempora odio vero possimus, recusandae
        iusto, quisquam, iste unde modi dolorum fuga.
      </p>
    </ThemeContext.Provider>
  );
};

export default Context;
