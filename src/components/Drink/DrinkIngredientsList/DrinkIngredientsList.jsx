import { Ingredient } from '../Ingredient/Ingredient';
import { Title, IngredientList } from './DrinkIngredientsList.style';

export const DrinkIngredientsList = ({ coctailInfo }) => {
  const ingredients = coctailInfo !== null ? coctailInfo.ingredients : [];

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
    </>
  );
};
