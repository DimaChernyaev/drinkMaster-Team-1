import { useEffect, useState } from 'react';
import {
  getIngredients,
} from '../../../helpers/API/operationsFilters';
import { Ingredient } from '../Ingredient/Ingredient';
import { Title, IngredientList } from './DrinkIngredientsList.style';


export const DrinkIngredientsList = ({ coctailInfo }) => {
  const [ingredientsData, setIngredientsData] = useState([]);
  const ingredients = coctailInfo !== null ? coctailInfo.ingredients : [];

  const ingredientsIdArr = ingredients.map(
    (ingredient) => ingredient.ingredientId,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getIngredients();
        if (data.length !== 0) {
          const ingredientsImages = data.filter((item) =>
            ingredientsIdArr.includes(item._id),
          );
          setIngredientsData(ingredientsImages);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [coctailInfo]);

  const combinedIngredients = ingredients.map((ingredient) => {
    const ingredientData = ingredientsData.find(
      (data) => data._id === ingredient.ingredientId
    );
    return {
      ...ingredient,
      ingredientThumb: ingredientData ? ingredientData.ingredientThumb : null,
    };
  });

  return (
    <>
      <Title>Ingredients</Title>
      <IngredientList>
        {combinedIngredients.map(({ title, measure, ingredientId, ingredientThumb }) => (
          <Ingredient title={title} measure={measure} key={ingredientId} photo={ingredientThumb} />
        ))}
      </IngredientList>
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
