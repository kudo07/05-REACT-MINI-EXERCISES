import { useEffect, useState } from 'react';
import Component from './Component';

const UserList = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUser(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>User Name</h1>
      {loading ? (
        <h1> LOADING</h1>
      ) : (
        user.map((value, id) => <Component value={value} key={id} />)
      )}
    </>
  );
};
export default UserList;
