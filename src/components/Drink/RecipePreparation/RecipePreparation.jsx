import { DrinkPageImg } from '../DrinkPageImg/DrinkPageImg';
import { Recipe, Title, Preparation } from './RecipePreparation.style';

export const RecipePreparation = ({ coctailInfo }) => {
  const instructions = coctailInfo !== null ? coctailInfo.instructions : '';
  const description = coctailInfo !== null ? coctailInfo.description : '';

  return (
    <>
      <Title>Recipe Preparation</Title>
      <Recipe>
        <div>
          <Preparation style={{marginBottom : 40}}> {description} </Preparation>
          <Preparation> {instructions} </Preparation>
        </div>

        <DrinkPageImg />
      </Recipe>
    </>
  );
};
