import { useState } from 'react';
import { credentials } from '../data/credentials';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = () => {
    const foundUser = credentials.find(
      (e) =>
        e.username === username && e.password === password
    );

    if (!foundUser) {
      alert('invalid user');
      setUsername('');
      setPassword('');
      return;
    }

    localStorage.setItem('token', username);
    navigate(from, { replace: true });
  };

  return (
    <div>
      <input
        value={username}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />{' '}
      <br />
      <br />
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
