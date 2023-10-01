import { useState, useEffect } from 'react';
import {
  getCategories,
  getIngredients,
} from '../../helpers/API/operationsFilters';
import Filter from '../../components/Filter/Filter';
import { CardCoctali } from '../../helpers/CardCoctail/CardCoctail';
import { Container, CardList, Styled_CardListDiv } from './DrinksPage.styled';
import { getCoctailsByFilter } from '../../helpers/API/operationsDrinks';
import PageTitle from '../../components/DefaultComponents/PageTitle/PageTitle';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Paginator from '../../components/Paginator/Paginator';
import { Loader } from '../../components/Loader/Loader.styled';
import { ThreeDots } from 'react-loader-spinner';

// Сторінка Drinks: рендерить компонент Filter, список карток паноїв, компонент Paginator

const DrinksPage = () => {
  //стан
  const [categoryList, setCategoryList] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);
  const [drinkItems, setDrinkItems] = useState([]);
  const [totalDrinks, setTotalDrinks] = useState([]);
  const [page, setPage] = useState(1);
  const [per_page] = useState(window.innerWidth > 1279 ? 9 : 10);
  const [isEmpty, setIsEmpty] = useState(false);
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
  ) => {
    try {
      setIsLoading(true);
      const { drinks, total } = await getCoctailsByFilter(
        keyword,
        category,
        ingredient,
        page,
        per_page,
      );
      setTotalDrinks(total);
      if (drinks.length === 0) {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
      }

      setDrinkItems((prev) => drinks);
    } catch (error) {
      if (error.code !== 'ERR_CANCELED') {
        console.log(error);
        throw Error('Oops! Something went wrong! Try reloading the page!');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageClick = (event) => {
    console.log('event=', event);
    const newOffset = (event.selected * per_page) % totalDrinks;
    console.log('totalDrinks=', totalDrinks);
    console.log('newOffset=', newOffset);
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <Container> */}

      <PageTitle title="Drinks" />

      <Filter
        categoryList={categoryList}
        ingredientList={ingredientList}
        onChangeFilter={getPopularDrinks}
      />

      {!isEmpty ? (
        <Styled_CardListDiv>
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
        </Styled_CardListDiv>
      ) : (
        /* < Paginator changeQuery={this.onchangeQuery} /> */
        <ErrorPage />
      )}

      {isLoading && (
        <Loader>
          {' '}
          <ThreeDots color="#f3f3f3" width="60" />
        </Loader>
      )}

      <Paginator handlePageClick={handlePageClick} pageCount={page} />

      {/* </Container> */}
    </>
  );
};

// -------------------------------------------------------------------------------------------------------------------------

export default DrinksPage;
