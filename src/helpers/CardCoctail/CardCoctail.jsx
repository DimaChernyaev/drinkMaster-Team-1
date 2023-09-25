import { Link } from 'react-router-dom';
import { Card, ImageCard, CocktailName, Wrapper } from './CardCoctail.styled';

export const CardCoctali = ({ _id, drink, drinkThumb }) => {
  return (
    <Card>
      <ImageCard src={drinkThumb} alt={drink}></ImageCard>
      <Wrapper>
        <CocktailName>{drink}</CocktailName>
        <Link to={`drink/${_id}`}>See more</Link>
      </Wrapper>
    </Card>
  );
};
