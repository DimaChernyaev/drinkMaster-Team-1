import { useEffect, useMemo, useState } from 'react';
import { getIngredientById } from '../../../helpers/API/operationsFilters';
import { Ingredient } from '../Ingredient/Ingredient';
import { Title, IngredientList } from './DrinkIngredientsList.style';
import { IngredientPhoto } from '../IngredientPhoto/IngredientPhoto';

export const DrinkIngredientsList = ({ coctailInfo }) => {
  const [ingredientsData, setIngredientsData] = useState([]);
  const ingredients = useMemo(
    () => (coctailInfo !== null ? coctailInfo.ingredients : []),
    [coctailInfo],
  );

  useEffect(() => {
    const fetchData = async () => {
      const ingredientArr = ingredients.map(
        (ingredient) => ingredient.ingredientId,
      );
      try {
        const data = await getIngredientById(ingredientArr);
        if (data.length !== 0) {
          const responseData = data.map((item) => item.data);
          setIngredientsData(responseData);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [ingredients]);



  // console.log(ingredientsData);

  return (
    <>
      <Title>Ingredients</Title>
      <IngredientList>
        {ingredients.map(({ title, measure, ingredientId }) => {
          return (
            <Ingredient name={title} number={measure} key={ingredientId} />
          );
        })}
      </IngredientList>
      {ingredientsData.map(({ ingredientThumb, _id}) => {
          return (
            <IngredientPhoto photo={ingredientThumb} key={_id}/>
          );
        })}
    </>
  );
};



  // useEffect(() => {
  //   const fetchData = async () => {
  //     const ingredientArr = ingredients.map(
  //       (ingredient) => ingredient.ingredientId,
  //     );
  //     try {
  //       const data = await getIngredientById(ingredientArr);
  //       if (data.length !== 0) {
  //         const responseData = data.map((item) => item.data);
  //         setIngredientsData(responseData);
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchData();
  // }, [ingredients]);