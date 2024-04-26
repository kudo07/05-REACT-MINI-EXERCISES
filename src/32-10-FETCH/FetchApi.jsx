import React, { useEffect, useState } from 'react';

const FetchApi = () => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    const controller = new AbortController();
    // hook up this controller
    // when we call the controller we dont run the this fetch request
    // so we started our fetch our component re-mounted
    //abort that fetch req which is currently in the fetch request
    //  then we go the new fetch request we dont re-mounted at that point
    //success

    fetch('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        setUsers(data);
        console.log('Here');
      })
      .catch((e) => {
        if (e?.name === 'AbortError') return;
        setError(e);
      })
      .finally(setLoading(false));
    return () => {
      controller.abort();
    };
  }, []);
  let jsx;
  if (loading) {
    jsx = <h2>LOADING</h2>;
  } else if (error) {
    jsx = <h2>Error!</h2>;
  } else {
    jsx = JSON.stringify(users);
  }
  return <div>{jsx}</div>;
};

export default FetchApi;
