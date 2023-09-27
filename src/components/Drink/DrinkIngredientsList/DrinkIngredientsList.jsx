import { useEffect, useState } from 'react';
import {
  // getIngredientById,
  getIngredients,
} from '../../../helpers/API/operationsFilters';
import { Ingredient } from '../Ingredient/Ingredient';
import { Title, IngredientList } from './DrinkIngredientsList.style';
// import { IngredientPhoto } from '../IngredientPhoto/IngredientPhoto';

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
      {ingredientsData.map(({ ingredientThumb, _id }) => {
        return (
          <li key={_id}>
            {' '}
            <img src={ingredientThumb} width={70} />{' '}
          </li>
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
