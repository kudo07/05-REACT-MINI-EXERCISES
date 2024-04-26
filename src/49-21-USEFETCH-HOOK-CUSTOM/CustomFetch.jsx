import { useState } from 'react';
import { useFetch } from './useFetch';

const URLS = {
  USERS: 'https://jsonplaceholder.typicode.com/users',
  POSTS: 'https://jsonplaceholder.typicode.com/posts',
  COMMENTS: 'https://jsonplaceholder.typicode.com/comments',
};

// BONUS
const options = {
  method: 'POST',
  body: JSON.stringify({ name: 'first' }),
  headers: {
    'Content-type': 'application/json',
  },
};
const CustomFetch = () => {
  const [url, setUrl] = useState(URLS.USERS);
  const { data, isLoading, isError } = useFetch(url);
  // const { data, isLoading, isError } = useFetch(url, options);
  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            checked={url === URLS.USERS}
            onChange={() => setUrl(URLS.USERS)}
          />
          USERS
        </label>
        <label>
          <input
            type="radio"
            checked={url === URLS.POSTS}
            onChange={() => setUrl(URLS.POSTS)}
          />
          POSTS
        </label>
        <label>
          <input
            type="radio"
            checked={url === URLS.COMMENTS}
            onChange={() => setUrl(URLS.COMMENTS)}
          />
          COMMENTS
        </label>
      </div>
      {isLoading ? (
        <h1>LOADING....</h1>
      ) : isError ? (
        <h1>Error</h1>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </>
  );
};

export default CustomFetch;
