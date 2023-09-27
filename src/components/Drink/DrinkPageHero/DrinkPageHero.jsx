import { useEffect, useState } from 'react';
import PageTitle from '../../DefaultComponents/PageTitle/PageTitle';
import { AddToFavoriteBtn } from '../AddToFavoriteBtn/AddToFavoriteBtn';
import { Container, ShortDescr, SubTitle } from './DrinkPageHero.style';
import { CoctailImg } from '../CoctailImg/CoctailImg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  deleteFavorite,
} from '../../../redux/drinks/favorites/favoritesOperations';
import { selectFavoriteItems } from '../../../redux/drinks/favorites/favoriteSelectors';

export const DrinkPageHero = ({ coctailInfo }) => {
  const favorits = useSelector(selectFavoriteItems);

  const title = coctailInfo !== null ? coctailInfo.drink : '';
  const glass = coctailInfo !== null ? coctailInfo.glass : '';
  const alcoholic = coctailInfo !== null ? coctailInfo.alcoholic : '';
  const description = coctailInfo !== null ? coctailInfo.shortDescription : '';
  const image = coctailInfo !== null ? coctailInfo.drinkThumb : 'image';
  const id = coctailInfo !== null ? coctailInfo._id : '';
  const dispatch = useDispatch();
  const [addedDrink, setAddedDrink] = useState(false);

  useEffect(() => {
    if (favorits.find((item) => item._id === id)) {
      setAddedDrink(true);
    }
  }, [favorits, id]);

  const handleOnClick = () => {
    if (addedDrink) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }

    setAddedDrink(!addedDrink);
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
          text={addedDrink ? '✔ Added to favorites' : 'Add to favorite drinks'}
          onClick={handleOnClick}
        />
      </div>

      <CoctailImg photo={image} />
    </Container>
  );
};
