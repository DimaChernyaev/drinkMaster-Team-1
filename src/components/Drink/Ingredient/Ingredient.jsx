import { IngredientItem } from "./Ingredient.style.js";

export const Ingredient = ({ number, name }) => {
  return (
    <IngredientItem>
      <p>{name}</p>
      <span>{number}</span>
    </IngredientItem>
  );
};
