import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  return (
    <nav>
      <Link to="/">Home</Link> |{' '}
      <Link to="/about">About</Link> |{' '}
      <Link to={'/members'}>Members</Link> |{' '}
      <Link to={'/items'}>Items</Link>
      {token ? (
        <>
          {' '}
          |{' '}
          <button
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/');
            }}
          >
            Logout
          </button>
        </>
      ) : null}
    </nav>
  );
};

export default Navbar;
