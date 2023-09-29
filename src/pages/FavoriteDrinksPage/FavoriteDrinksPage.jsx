import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavorites } from '../../redux/drinks/favorites/favoritesOperations';
import {
  selectError,
  selectFavoriteItems,
  selectIsLoading,
  // selectPerPage,
  // selectCurrentPage,
  // setCurrentPage,
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
import { StyledReactPaginate } from '../../components/Paginator/Paginator.styled';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

const PER_PAGE = 4;

const FavoriteDrinksPage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectFavoriteItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // const perPage = useSelector(selectPerPage);
  // const currentPage = useSelector(selectCurrentPage);

  //Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = PER_PAGE;

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
      <Title>Favorites</Title>
      <Elipse />
      <ElipseTwo />
      {isLoading && !error && (
        <Loader>
          <ThreeDots color="#f3f3f3" width="80" />
        </Loader>
      )}
      <DrinksList drinks={currentItems} />
      {/* <Paginator onClick={handlePageClick} pageCount={pageCount} /> */}
      {!!(pageCount - 1) && (
        <StyledReactPaginate
          breakLabel="..."
          nextLabel={<MdArrowForwardIos fill="rgba(243, 243, 243, 0.30)" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={<MdArrowBackIosNew fill="rgba(243, 243, 243, 0.30)" />}
          renderOnZeroPageCount={null}
          onPageActive={window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })}
        />
      )}
      {error && <ErrorPage />}
    </Container>
  );
};

export default FavoriteDrinksPage;
