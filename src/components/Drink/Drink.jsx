import { useParams } from 'react-router-dom';
import { DrinkIngredientsList } from './DrinkIngredientsList/DrinkIngredientsList';
import { DrinkPageHero } from './DrinkPageHero/DrinkPageHero';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';
import { useEffect, useState } from 'react';
import { getCurrentCoctail } from '../../helpers/API/operationsDrinks';

const Drink = () => {
  const [coctailData, setCoctailData] = useState(null);
  const { drinkId } = useParams();
  console.log(drinkId);

  useEffect(() => {
    const currentCocteil = async () => {
      const data = await getCurrentCoctail(drinkId);
      console.log(data);
      setCoctailData(data);
    };
    currentCocteil();
  }, []);

  return (
    <>
      <DrinkPageHero coctailInfo={coctailData} />
      <DrinkIngredientsList coctailInfo={coctailData} />
      <RecipePreparation coctailInfo={coctailData} />
    </>
  );
};

export default Drink;
