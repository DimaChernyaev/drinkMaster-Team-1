import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites } from '../../redux/drinks/favorites/favoritesOperations';
import {
  selectError,
  selectFavoriteItems,
  selectIsLoading,
} from '../../redux/drinks/favorites/favoriteSelectors';
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
} from './FavoriteDrinksPage.styled';

const FavoriteDrinksPage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectFavoriteItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <Container>
      <Title>Favorites</Title>
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
      {error && <ErrorPage />}
    </Container>
  );
};

export default FavoriteDrinksPage;
