import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useItemsPerPage from '../../hooks/useItemsPerPage';
import { fetchOwn } from '../../redux/drinks/own/ownOperations';
import {
  selectError,
  selectOwnItems,
} from '../../redux/drinks/own/ownSelector';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import DrinksList from '../../components/DrinksList/DrinksListFavorites';
import Paginator from '../../components/Paginator/Paginator';
import { Container } from '../FavoriteDrinksPage/FavoriteDrinksPage.styled';
import PageTitle from '../../components/DefaultComponents/PageTitle/PageTitle';
import DrinksListOwn from '../../components/DrinksList/DrinksListOwn';
import LoaderDots from '../../components/Loader/LoaderDots';

const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectOwnItems);
  const error = useSelector(selectError);
  const [isLoading, setIsLoading] = useState(false);

  // Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = useItemsPerPage();

  useEffect(() => {
    setIsLoading(true);
    try {
      dispatch(fetchOwn());
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
      <PageTitle title="My drinks" />
      {isLoading ? (
        <LoaderDots />
      ) : (
        <>
          <DrinksListOwn drinks={currentItems} />
          <Paginator handlePageClick={handlePageClick} />
        </>
      )}
      {error && <ErrorPage />}
    </Container>
  );
};

export default MyDrinksPage;
