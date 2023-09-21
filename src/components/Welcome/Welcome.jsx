import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <div>WelcomePage</div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
    </>
  );
};

export default Welcome;
