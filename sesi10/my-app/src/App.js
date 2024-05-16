import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
} from './store/reducers/counter';
import { useEffect } from 'react';
import {
  deleteUser,
  getUsers,
} from './store/reducers/user';

function App() {
  const { count } = useSelector((state) => state.counter);
  const { users, isLoading } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleGetMoreUsers = () => {
    dispatch(getUsers('refetch'));
  };

  const handleDeleteUser = (index) => {
    dispatch(deleteUser(index));
  };

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleGetMoreUsers}>
        Get More Users
      </button>
      {users.length ? (
        <div>
          <table border={1}>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={user.email + index}>
                    <td>
                      {user.name.first} {user.name.last}
                    </td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        onClick={() =>
                          handleDeleteUser(index)
                        }
                      >
                        Delete User
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {isLoading ? <h1>Sedang Loading ...</h1> : null}
        </div>
      ) : null}
    </div>
  );
}

export default App;
