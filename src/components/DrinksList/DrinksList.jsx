import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteFavorite } from '../../redux/drinks/favorites/favoritesOperations';
import {
  selectError,
  // selectFavoriteItems,
  selectIsLoading,
} from '../../redux/drinks/favorites/favoriteSelectors';
import NotFound from '../NotFound/NotFound';
import { Link } from 'react-router-dom';
import icon from '../../assets/images/favoritePage/trash.svg';
import {
  DrinksListSet,
  CardWrap,
  ImgCard,
  TitleWrap,
  BtnWrap,
  Title,
  TitleType,
  TitleDescription,
  ButtonSeeMore,
  ButtonDel,

  // Text,
} from './DrinksList.styled';

const DrinksList = ({ drinks }) => {
  const dispatch = useDispatch();
  // const drinks = useSelector(selectFavoriteItems);
  // console.log('drinks', drinks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {!error && !isLoading && drinks.length === 0 && <NotFound />}

      <DrinksListSet>
        {drinks.length > 0 &&
          drinks.map(
            ({ _id, drink, alcoholic, shortDescription, drinkThumb }) => (
              <CardWrap key={_id}>
                <ImgCard src={drinkThumb} alt={drink}></ImgCard>
                <TitleWrap>
                  <Title>{drink}</Title>
                  <TitleType>{alcoholic}</TitleType>
                  <TitleDescription>{shortDescription}</TitleDescription>
                </TitleWrap>

                <BtnWrap>
                  <Link to={`/drink/${_id}`}>
                    <ButtonSeeMore>See more</ButtonSeeMore>
                  </Link>

                  <ButtonDel
                    type="button"
                    onClick={() => dispatch(deleteFavorite(_id))}
                  >
                    <img src={icon} alt="trash" />
                  </ButtonDel>
                </BtnWrap>
              </CardWrap>
            ),
          )}
      </DrinksListSet>
    </>
  );
};

export default DrinksList;
