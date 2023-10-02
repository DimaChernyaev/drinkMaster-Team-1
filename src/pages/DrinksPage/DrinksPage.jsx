import { useState, useEffect } from 'react';
import { getCategories, getIngredients} from '../../helpers/API/operationsFilters';
import { Container} from './DrinksPage.styled';
import PageTitle from '../../components/DefaultComponents/PageTitle/PageTitle';
import Drinks from '../../components/Drinks/Drinks';

// Сторінка Drinks page: рендерить заголовок сторінки та компонент Drinks -------------------------------------------------
  const DrinksPage = () => {

      //стан: список категорій напоїв та список інгредієнтів. Завантажується з БД один раз при відкритті сторінки 
      const [categoryList, setCategoryList] = useState([]);
      const [ingredientList, setIngredientList] = useState([]);


      //useEffect спрацює один раз при монтуванні компонента: дістає з БД списки категорій та інгредієнтів і заносить їх в стан
      useEffect(() => {
        const getCategoryList = async () => {
          try {
            const data = await getCategories();
            setCategoryList(data);
          } catch (error) {
            if (error.code !== 'ERR_CANCELED') {
              console.log(error);
              throw Error('Oops! Something went wrong! Try reloading the page!');
            }
          }
        };
        getCategoryList();

        const getIngredientList = async () => {
          try {
            const data = await getIngredients();
            const titles = data.map((item) => item.title);
            setIngredientList(titles);
          } catch (error) {
            if (error.code !== 'ERR_CANCELED') {
              console.log(error);
              throw Error('Oops! Something went wrong! Try reloading the page!');
            }
          }
        };
        getIngredientList();

      }, []);


      return (
          <Container>
            <PageTitle title="Drinks" />
            <Drinks categoryList={categoryList} ingredientList={ingredientList}/>
          </Container>
      );
  };
// -------------------------------------------------------------------------------------------------------------------------

export default DrinksPage;
