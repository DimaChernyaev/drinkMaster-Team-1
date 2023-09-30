import { useEffect, useState } from 'react';
import { getCoctailsByCategories } from '../../helpers/API/operationsDrinks';
import { PrewievDrinks } from './PrewievDrinks/PrewievDrinks';
import { HomeContainer, LinkDrinks } from './Home.styled';

const Home = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const data = await getCoctailsByCategories();
        console.log(data);
        const drinksArr = Object.entries(data);
        setDrinks([...drinksArr]);
      } catch (error) {
        console.error('Error fetching drinks:', error);
      }
    };

    fetchDrinks();
  }, []);

  return (
    <HomeContainer>
      <PrewievDrinks drinks={drinks} />
      <LinkDrinks to={`/drinks`}>Other Drinks</LinkDrinks>
    </HomeContainer>
  );
};

export default Home;
