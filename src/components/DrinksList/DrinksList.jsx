// import { useSelector } from 'react-redux';
// import { selectVisibleContacts } from 'redux/contacts/contactSelectors';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contacts/contactOperations';
// import { selectIsLoading } from 'redux/contacts/contactSelectors';
import NotFound from '../NotFound/NotFound';
import { Link } from 'react-router-dom';
import Img from '../DrinksList/Weeks.jpg';
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
  ButtonDell,

  // Text,
} from './DrinksList.styled';

const DrinksList = ({ drinks, onDeleteDrinks }) => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  // const dispatch = useDispatch();
  // const contacts = useSelector(selectVisibleContacts);
  // const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {/* {!isLoading && contacts.length === 0 && (
        <NotFound />
      )} */}

      <DrinksListSet>
        <CardWrap>
          <ImgCard src={Img} alt="drink" />
          <TitleWrap>
            <Title>drink</Title>
            <TitleType>alcoholic</TitleType>
            <TitleDescription>shortDescription</TitleDescription>
          </TitleWrap>

          <BtnWrap>
            <Link to="/drink/:drinkId">
              <ButtonSeeMore>See more</ButtonSeeMore>
            </Link>
            <ButtonDell type="button">
              <img src={icon} alt="trash" />
            </ButtonDell>
          </BtnWrap>
        </CardWrap>
        <CardWrap>
          <ImgCard src={Img} alt="drink" />
          <TitleWrap>
            <Title>drink</Title>
            <TitleType>alcoholic</TitleType>
            <TitleDescription>shortDescription</TitleDescription>
          </TitleWrap>

          <BtnWrap>
            <Link to="/drink/:drinkId">
              <ButtonSeeMore>See more</ButtonSeeMore>
            </Link>
            <ButtonDell type="button">
              <img src={icon} alt="trash" />
            </ButtonDell>
          </BtnWrap>
        </CardWrap>
        {/* <DrinksItem /> */}
        {/* {drinks.length > 0 &&
          drinks.map(({ id, name, number }) => (
            <DrinksItem key={id}>
              <DrinksInfo>
                {name}:<DrinksName>{number}</DrinksName>
              </DrinksInfo>
              <ButtonDel
                type="button"
                onClick={() => dispatch(deleteDrinks(id))}
              >
                <IoClose size={32} fill="teal" />
              </ButtonDel>
            </DrinksItem>
          ))} */}
      </DrinksListSet>
    </>
  );
};

export default DrinksList;
