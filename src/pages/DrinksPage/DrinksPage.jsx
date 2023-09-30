import { useState, useEffect } from 'react';
import {
  getCategories,
  getIngredients,
} from '../../helpers/API/operationsFilters';
import Filter from '../../components/Filter/Filter';
import { CardCoctali } from '../../helpers/CardCoctail/CardCoctail';
// import Loader from ''
import { Container } from '../FavoriteDrinksPage/FavoriteDrinksPage.styled';
import { CardList } from './DrinksPage.styled';
import { getCoctailsByFilter } from '../../helpers/API/operationsDrinks';
import PageTitle from '../../components/DefaultComponents/PageTitle/PageTitle';
import NotFound from '../../components/NotFound/NotFound';

// Сторінка Drinks: рендерить компонент Filter, список карток паноїв, компонент Paginator

const DrinksPage = () => {
  //стан
  const [categoryList, setCategoryList] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);
  const [drinkItems, setDrinkItems] = useState([]);
  const [page, setPage] = useState(1);
  const [per_page, setPerPage] = useState(
    (window.innerWidth > 1439 && 9) || 10,
  );
  const [isLoading, setIsLoading] = useState(false);

  //useEffect спрацює один раз при монтуванні компонента: дістане з БД списки категорій та інгредієнтів і занесе їх в стан
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

    getPopularDrinks('', '', '', page, per_page);
  }, []);

  //Запит на сервер щоб отримати список напоїв по фільтрам зі стану. Показник на цю функцію передається як пропс в компонет Filter
  const getPopularDrinks = async (
    keyword = '',
    category = '',
    ingredient = '',
    page = 1,
    per_page = 10,
  ) => {
    console.log(
      'я в getPopularDrinks DrinksPage:',
      keyword,
      category,
      ingredient,
      page,
      per_page,
    );
    try {
      setIsLoading(true);
      const { drinks } = await getCoctailsByFilter(
        keyword,
        category,
        ingredient,
        page,
        per_page,
      ); //, abortCtrl.signal);
      setDrinkItems(drinks);
    } catch (error) {
      if (error.code !== 'ERR_CANCELED') {
        console.log(error);
        throw Error('Oops! Something went wrong! Try reloading the page!');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <PageTitle title="Drinks" />

      <Filter
        categoryList={categoryList}
        ingredientList={ingredientList}
        onChangeFilter={getPopularDrinks}
      />

      {drinkItems.lenght !== 0 ? (
        <div>
          <CardList>
            {drinkItems.map(({ _id, drink, drinkThumb }) => {
              return (
                <CardCoctali
                  _id={_id}
                  drink={drink}
                  drinkThumb={drinkThumb}
                  key={_id}
                />
              );
            })}
          </CardList>
        </div>
      ) : (
        /* < Paginator changeQuery={this.onchangeQuery} /> */
        <NotFound />
      )}

      {/* {isLoading} && <Loader/> */}
    </Container>
  );
};

// -------------------------------------------------------------------------------------------------------------------------

export default DrinksPage;
