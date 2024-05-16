import logo from './logo.svg';
import './App.css';
import React, {
  Component,
  useEffect,
  useState,
} from 'react';
import { styles } from './App.style';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

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
    <Table striped bordered hover>
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
    </Table>
  );
};

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

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
        <h1
          className="userTable"
          id="table"
          style={{
            color: 'green',
            ...styles.title,
            ...styles.spacing,
          }}
        >
          Table User
        </h1>
        <Container fluid>
          <Row>
            <Col>
              <h5>Hello</h5>
            </Col>
            <Col>
              <h5>World</h5>
            </Col>
          </Row>
        </Container>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="holder.js/100px180"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card
              title and make up the bulk of the card's
              content.
            </Card.Text>
            <Button variant="warning">Go somewhere</Button>
          </Card.Body>
        </Card>
        <UserTable />
      </div>
    );
  }
}

export default App;
