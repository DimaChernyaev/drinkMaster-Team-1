import DrinksList from '../../components/DrinksList/DrinksList';
import Paginator from '../../components/Paginator/Paginator';
import { Container, Title } from './MyDrinksPage.styled';

const MyDrinksPage = () => {
  return (
    <Container>
      <Title>My drinks</Title>
      <DrinksList />
      <Paginator />
    </Container>
  );
};

export default MyDrinksPage;
