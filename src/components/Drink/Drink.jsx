import { useParams } from 'react-router-dom';
import { DrinkIngredientsList } from './DrinkIngredientsList/DrinkIngredientsList';
import { DrinkPageHero } from './DrinkPageHero/DrinkPageHero';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';
import { useEffect, useState } from 'react';
import { getCurrentCoctail } from '../../helpers/API/operationsDrinks';
import LoaderDots from '../Loader/LoaderDots';

const Drink = () => {
  const [coctailData, setCoctailData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { drinkId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await getCurrentCoctail(drinkId);
        setCoctailData(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [drinkId]);

  return isLoading ? (
    <LoaderDots />
  ) : (
    <>
      <DrinkPageHero coctailInfo={coctailData} />
      <DrinkIngredientsList coctailInfo={coctailData} />
      <RecipePreparation coctailInfo={coctailData} />
    </>
  );
};

export default Drink;

// useEffect(() => {

//   const currentCoctail = async () => {
//     const data = await getCurrentCoctail(drinkId);
//     setCoctailData(data);
//   };
//   currentCoctail();
// }, []);
