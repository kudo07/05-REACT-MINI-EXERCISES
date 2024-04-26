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
      <label>
        Query:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
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

export default Memo;
