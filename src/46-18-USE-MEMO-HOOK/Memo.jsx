import React, { useState } from 'react';
const LIST = Array(1000000)
  .fill()
  .map((_, i) => i + 1);

const Memo = () => {
  const [query, setQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const filteredList = LIST.filter((n) => n.toString().includes(query));
  console.log(filteredList.length);
  return (
    <div style={{ background: isDarkMode ? '#333' : 'white' }}>
      <label>Query:</label>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <br />
      <label>
        <input
          type="checkbox"
          onChange={(e) => setIsDarkMode(e.target.checked)}
          checked={isDarkMode}
        />
        Dark Mode
      </label>
    </div>
  );
};
// when write the input using useMemo re-render didnt happen only the time of filtered list changes it render only the respected vaiable
// updation and renders not every single time renders

export default Memo;
