// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/contactOperations';
// import { selectError, selectIsLoading } from 'redux/contacts/contactSelectors';
// import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import DrinksList from '../../components/DrinksList/DrinksList';
// import Paginator from '../../components/Paginator/Paginator';
// import { ThreeDots } from 'react-loader-spinner';
// import { Loader } from '../../components/Loader/Loader.styled';
// import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import {
  Container,
  Title,
  Elipse,
  ElipseTwo,
} from './FavoriteDrinksPage.styled';

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
      <Elipse />
      <ElipseTwo />
      {/* {isLoading && !error && (
        <Loader>
          <ThreeDots color="#f3f3f3" width="80" />
        </Loader>
      )} */}
      <DrinksList />
      {/* <Paginator /> */}
      {/* {error && <ErrorPage />} */}
    </Container>
  );
};

export default FavoriteDrinksPage;
