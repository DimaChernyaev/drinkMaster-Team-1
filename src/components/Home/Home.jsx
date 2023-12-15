import { useEffect, useState } from 'react';
import { getCoctailsByCategories } from '../../helpers/API/operationsDrinks';
import { PrewievDrinks } from './PrewievDrinks/PrewievDrinks';
import { HomeContainer, LinkDrinks } from './Home.styled';
import LoaderDots from '../Loader/LoaderDots';

const Home = () => {
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDrinks = async () => {
      setIsLoading(true);
      try {
        const data = await getCoctailsByCategories();
        const drinksArr = Object.entries(data);
        setDrinks([...drinksArr]);
      } catch (error) {
        console.error('Error fetching drinks:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDrinks();
  }, []);

  return isLoading ? (
    <LoaderDots />
  ) : (
    <HomeContainer>
      <PrewievDrinks drinks={drinks} />
      <LinkDrinks to={`/drinks`}>Other Drinks</LinkDrinks>
    </HomeContainer>
  );
};

export default Home;
