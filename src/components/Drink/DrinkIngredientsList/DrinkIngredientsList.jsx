import { useEffect} from 'react';
// import { getIngredients } from '../../../helpers/API/operationsFilters';
import { Ingredient } from '../Ingredient/Ingredient';
import { Title, IngredientList } from './DrinkIngredientsList.style';

export const DrinkIngredientsList = ({ coctailInfo }) => {
  // const [ingredientsData, setIngredientsData] = useState(null);

  const ingredients = coctailInfo !== null ? coctailInfo.ingredients : [];

  const fetchData = async () => {
    try {
      // const data = await getIngredients();
      // setIngredientsData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

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
    </>
  );
};
