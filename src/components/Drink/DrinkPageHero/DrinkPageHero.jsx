import { useState } from 'react';
import PageTitle from '../../DefaultComponents/PageTitle/PageTitle';
import { AddToFavoriteBtn } from '../AddToFavoriteBtn/AddToFavoriteBtn';
import { ShortDescr, SubTitle } from './DrinkPageHero.style';

export const DrinkPageHero = ({ coctailInfo }) => {
  const title = coctailInfo !== null ? coctailInfo.drink : '';
  const glass = coctailInfo !== null ? coctailInfo.glass : '';
  const alcoholic = coctailInfo !== null ? coctailInfo.alcoholic : '';
  const description = coctailInfo !== null ? coctailInfo.description : '';

  const [addedDrink, setAddedDrink] = useState(true);

  const handleOnClick = () => {
    setAddedDrink((prev) => !prev);
  };

  return (
    <>
      <PageTitle title={title} style={{ marginBottom: '10px' }} />
      <SubTitle>
        {glass} / {alcoholic}
      </SubTitle>
      <ShortDescr>{description} </ShortDescr>
      <AddToFavoriteBtn
        text={addedDrink ? 'Add to favorite drinks' : 'Remove from favorites'}
        onClick={handleOnClick}
      />
    </>
  );
};
