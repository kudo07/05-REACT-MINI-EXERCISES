import React, { useContext } from 'react';
import { ThemeContext } from './Context';

const GradnChild = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button
        style={{
          background: isDarkMode ? 'white' : '#333',
          color: isDarkMode ? '#333' : 'white',
          border: 'none',
          padding: '.5em',
          borderRadius: '.25em',
          cursor: 'pointer',
        }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default GradnChild;
