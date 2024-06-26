import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="about-me">About Me</Link> |{' '}
      <Link to="about-company">About Company</Link>
      <Outlet />
    </div>
  );
};

export default About;
