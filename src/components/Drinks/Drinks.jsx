import { Link } from 'react-router-dom';

const Drinks = () => {
  const id = '639b6de9ff77d221f190c53d';

  return (
    <>
      <div>DrinksPage</div>
      <Link to={`/drink/${id}`}>Current</Link>
    </>
  );
};

export default Drinks;
