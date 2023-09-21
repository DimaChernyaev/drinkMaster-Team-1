import { DrinkIngredientsList } from './DrinkIngredientsList/DrinkIngredientsList';
import { DrinkPageHero } from './DrinkPageHero/DrinkPageHero';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';

const Drink = () => {
  // console.log(id);

  return (
    <>
      <DrinkPageHero />
      <DrinkIngredientsList />
      <RecipePreparation />
    </>
  );
};

export default Drink;
