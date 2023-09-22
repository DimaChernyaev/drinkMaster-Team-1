// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/contactOperations';
// import { selectError, selectIsLoading } from 'redux/contacts/contactSelectors';

// import DrinksList from '../../components/DrinksList/DrinksList';
// import Paginator from '../../components/Paginator/Paginator';
// import { ThreeDots } from 'react-loader-spinner';
// import { Loader } from '../../components/Loader/Loader.styled';
// import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { Container, Title } from './FavoriteDrinksPage.styled';

const FavoriteDrinksPage = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Container>
      <Title>Favorites</Title>
      {/* {isLoading && !error && (
        <Loader>
          <ThreeDots color="#f3f3f3" width="50" />
        </Loader>
      )} */}
      {/* <DrinksList /> */}
      {/* <Paginator /> */}
      {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
    </Container>
  );
};

export default FavoriteDrinksPage;
