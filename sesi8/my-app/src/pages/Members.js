import { Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Members = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div>
      <h1>Members</h1>
      {users.length &&
        users.map((user, index) => {
          const fullName =
            user.name.first + ' ' + user.name.last;
          return (
            <>
              <Link to={fullName}>{fullName}</Link>{' '}
              {index < users.length - 1 ? '|' : null}
            </>
          );
        })}
      {/* <Link to={'John Doe'}>John Doe</Link> |{' '}
      <Link to={'Jane Doe'}>Jane Doe</Link> */}
      <Outlet />
    </div>
  );
};

export default Members;
