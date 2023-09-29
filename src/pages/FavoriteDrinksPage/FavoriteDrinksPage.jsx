import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useItemsPerPage from '../../hooks/useItemsPerPage';
import { fetchFavorites } from '../../redux/drinks/favorites/favoritesOperations';
import {
  selectError,
  selectFavoriteItems,
  selectIsLoading,
} from '../../redux/drinks/favorites/favoriteSelectors';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import DrinksList from '../../components/DrinksList/DrinksList';
import Paginator from '../../components/Paginator/Paginator';
import { ThreeDots } from 'react-loader-spinner';
import { Loader } from '../../components/Loader/Loader.styled';
import { Container, Elipse, ElipseTwo } from './FavoriteDrinksPage.styled';
import PageTitle from '../../components/DefaultComponents/PageTitle/PageTitle';

const FavoriteDrinksPage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectFavoriteItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = useItemsPerPage();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  // Pagination
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = drinks.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(drinks.length / itemsPerPage);
    setCurrentItems(currentItems);
    setPageCount(pageCount);
  }, [itemOffset, itemsPerPage, drinks]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % drinks.length;
    setItemOffset(newOffset);
  };

  return (
    <Container>
      <PageTitle title="Favorites" />
      <Elipse />
      <ElipseTwo />
      {isLoading && !error && (
        <Loader>
          <ThreeDots color="#f3f3f3" width="80" />
        </Loader>
      )}
      <DrinksList drinks={currentItems} />
      <Paginator handlePageClick={handlePageClick} pageCount={pageCount} />
      {error && <ErrorPage />}
    </Container>
  );
};

export default FavoriteDrinksPage;
