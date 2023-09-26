import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOwn } from '../../redux/drinks/own/ownOperations';
import {
  selectError,
  selectOwnItems,
  selectIsLoading,
} from '../../redux/drinks/own/ownSelector';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import DrinksList from '../../components/DrinksList/DrinksList';
// import Paginator from '../../components/Paginator/Paginator';

import { ThreeDots } from 'react-loader-spinner';
import { Loader } from '../../components/Loader/Loader.styled';
import {
  Container,
  Title,
  Elipse,
  ElipseTwo,
} from '../FavoriteDrinksPage/FavoriteDrinksPage.styled';

const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectOwnItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchOwn());
  }, [dispatch]);

  return (
    <Container>
      <Title>My drinks</Title>
      <Elipse />
      <ElipseTwo />
      {isLoading && !error && (
        <Loader>
          <ThreeDots color="#f3f3f3" width="80" />
        </Loader>
      )}
      {error && <ErrorPage />}
      <DrinksList drinks={drinks} />
      {/* <Paginator /> */}
    </Container>
  );
};

export default MyDrinksPage;
