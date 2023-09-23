import DrinksList from '../../components/DrinksList/DrinksList';
import Paginator from '../../components/Paginator/Paginator';
// import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import {
  Container,
  Title,
  Elipse,
  ElipseTwo,
} from '../FavoriteDrinksPage/FavoriteDrinksPage.styled';

const MyDrinksPage = () => {
  return (
    <Container>
      <Title>My drinks</Title>
      <Elipse />
      <ElipseTwo />
      {/* {isLoading && !error && (
        <Loader>
          <ThreeDots color="#f3f3f3" width="80" />
        </Loader>
      )} */}
      <DrinksList />
      <Paginator />
      {/* {error && <ErrorPage /> */}
    </Container>
  );
};

export default MyDrinksPage;
