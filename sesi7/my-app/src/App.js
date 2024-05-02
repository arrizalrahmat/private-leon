import logo from './logo.svg';
import './App.css';
import React, {
  Component,
  useEffect,
  useState,
} from 'react';

const url = 'https://randomuser.me/api/?results=10';

class BigRedSquare extends Component {
  componentWillUnmount() {
    console.log('Big red Square will be unmounted');
  }

  render() {
    return (
      <div
        style={{
          height: 48,
          width: 48,
          backgroundColor: 'red',
        }}
      />
    );
  }
}

const UserCard = (props) => {
  const { user } = props;

  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log('component user-card berhasil di mounting');
  }, []); // sama dengan componentDidMount

  useEffect(() => {
    console.log('state username berubah:', username);
  }, [username]);

  useEffect(() => {
    console.log('ada suatu state yang berubah');
  }); // sama dengan componentDidUpdate

  return (
    <div>
      <h1>
        Full Name:{' '}
        {`${user.name.title} ${user.name.first} ${user.name.last}`}
      </h1>
      <h1>Email: {user.email}</h1>
      {/* <button onClick={() => setAge(age + 1)}>+</button>
      <button onClick={() => setAge(age - 1)}>-</button>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /> */}
    </div>
  );
};

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, []);

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>No</th>
          <th>Full Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, i) => (
          <tr>
            <td>{i + 1}</td>
            <td>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: 'Arrizal',
      users: [],
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data.results });
      });
  }

  // componentDidUpdate() {
  //   console.log('Terjadi perubahan state', {
  //     count: this.state.count,
  //   });
  // }

  render() {
    return (
      <div className="App">
        <UserTable />
        {/* <h1>Hello world</h1>
        <h1>count: {this.state.count}</h1>
        <button
          onClick={() =>
            this.setState({ count: this.state.count + 1 })
          }
        >
          +
        </button>
        <button
          onClick={() =>
            this.setState({ count: this.state.count - 1 })
          }
        >
          -
        </button>
        <h1>{this.state.name}</h1>
        <button
          onClick={() => this.setState({ name: 'Rahmat' })}
        >
          Rahmat
        </button>
        {this.state.count % 2 === 0 ? null : (
          <BigRedSquare />
        )} */}
        {/* {this.state.users.map((el) => (
          <UserCard user={el} />
        ))} */}
      </div>
    );
  }
}

export default App;
