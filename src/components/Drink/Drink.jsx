// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DrinkIngredientsList } from './DrinkIngredientsList/DrinkIngredientsList';
import { DrinkPageHero } from './DrinkPageHero/DrinkPageHero';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';
import { getCoctailById } from './service';
import { useEffect, useState } from 'react';

const Drink = () => {
  const [coctailData, setCoctailData] = useState(null);

// console.log(coctailData)

  const { drinkId } = useParams();

  const fetchData = async (id) => {
    try {
      const result = await getCoctailById(id);
      setCoctailData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(drinkId);
  }, []);

  return (
    <>
      <DrinkPageHero coctailInfo={coctailData} />
      <DrinkIngredientsList coctailInfo={coctailData} />
      <RecipePreparation coctailInfo={coctailData}/>
    </>
  );
};

export default Drink;
