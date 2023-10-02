import {
  ImageCard,
  CocktailName,
  Wrapper,
  CocktailLink,
  Card,
} from './CardCoctail.styled';

export const CardCoctali = ({ _id, drink, drinkThumb }) => {
  return (
    <li key={_id}>
      <ImageCard src={drinkThumb} alt={drink}></ImageCard>
      <Wrapper>
        <CocktailName>{drink}</CocktailName>
        <CocktailLink to={`/drink/${_id}`}>See more</CocktailLink>
      </Wrapper>
    </li>
  );
};
