import { useMemo, useState } from 'react';
const LIST = Array(1000000)
  .fill()
  .map((_, i) => i + 1);

const MemoA = () => {
  const [query, setQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const filteredList = useMemo(() => {
    return LIST.filter((n) => n.toString().includes(query));
  }, [query]);
  // every time when the query changes the re-render happens and take 1 sec to show the result in console
  // whenever the query changes it causes re-render and it takes time
  // const filteredList = LIST.filter((n) => n.toString().includes(query));
  // this takes vary long time to compute
  // long delay when click dark mode
  // const filteredList = LIST.filter((n) => n.toString().includes(query));
  // long computation thats when the useMemo comes in
  console.log(filteredList.length);
  return (
    <div
      style={{
        background: isDarkMode ? '#333' : 'white',
        color: isDarkMode ? 'white' : 'black',
      }}
    >
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

export default MemoA;
