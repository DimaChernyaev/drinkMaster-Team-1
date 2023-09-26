import { useState } from 'react';
import PageTitle from '../../DefaultComponents/PageTitle/PageTitle';
import { AddToFavoriteBtn } from '../AddToFavoriteBtn/AddToFavoriteBtn';
import { Container, ShortDescr, SubTitle } from './DrinkPageHero.style';
import { CoctailImg } from '../CoctailImg/CoctailImg';
import { useDispatch } from 'react-redux';
import { addFavorites } from '../../../redux/drinks/favorites/favoritesOperations';

export const DrinkPageHero = ({ coctailInfo }) => {
  const title = coctailInfo !== null ? coctailInfo.drink : '';
  const glass = coctailInfo !== null ? coctailInfo.glass : '';
  const alcoholic = coctailInfo !== null ? coctailInfo.alcoholic : '';
  const description = coctailInfo !== null ? coctailInfo.shortDescription : '';
  const image = coctailInfo !== null ? coctailInfo.drinkThumb : 'image';

  const [addedDrink, setAddedDrink] = useState(true);

  const dispatch = useDispatch();

  const handleOnClick = () => {
    setAddedDrink((prev) => !prev);
    dispatch(addFavorites(coctailInfo));
  };

  return (
    <Container>
      <div>
        <PageTitle title={title} style={{ marginBottom: '10px' }} />
        <SubTitle>
          {glass} / {alcoholic}
        </SubTitle>
        <ShortDescr>{description} </ShortDescr>
        <AddToFavoriteBtn
          text={addedDrink ? 'Add to favorite drinks' : 'Remove from favorites'}
          onClick={handleOnClick}
        />
      </div>

      <CoctailImg photo={image} />
    </Container>
  );
};
