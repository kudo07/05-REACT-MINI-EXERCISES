import { useEffect, useState } from 'react';
import Component from './Component';

const UserListT = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setIsLoading(false));
  }, []);
  // {
  //   console.log(JSON.stringify(users));
  // }
  return (
    <>
      <h1>User List</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map((user) => {
            return (
              <Component
                key={user.id}
                // name={user.name}
                // email={user.email}
                // phone={user.phone}
                // username={user.username}
                {...user}
                // exact same output
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

export default UserListT;
