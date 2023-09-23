import { useState } from 'react';
import PageTitle from '../../DefaultComponents/PageTitle/PageTitle';
import { AddToFavoriteBtn } from '../AddToFavoriteBtn/AddToFavoriteBtn';
import { ShortDescr, SubTitle } from './DrinkPageHero.style';

export const DrinkPageHero = () => {
  const [addedDrink, setAddedDrink] = useState(false);

  const handleOnClick = () => {
    setAddedDrink((prev) => !prev);
  };

  return (
    <>
      <PageTitle title="Coctaile name" style={{ marginBottom: '10px' }}/>
      <SubTitle>Highball glass / Non alcoholic</SubTitle>
      <ShortDescr>
        Just a Moonmint is a refreshing and minty cocktail that combines the
        flavors of vodka, lime juice, and mint syrup. It is made by shaking
        vodka, lime juice, mint syrup, and ice together and straining it into a
        glass.
      </ShortDescr>
      <AddToFavoriteBtn
        text={addedDrink ? 'Add to favorite drinks' : 'Remove from favorites'}
        onClick={handleOnClick}
      />
    </>
  );
};
