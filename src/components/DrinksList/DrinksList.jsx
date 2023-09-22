// import { useSelector } from 'react-redux';
// import { selectVisibleContacts } from 'redux/contacts/contactSelectors';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contacts/contactOperations';
// import { selectIsLoading } from 'redux/contacts/contactSelectors';
// import { IoClose } from 'react-icons/io5';
import {
  DrinksListBlock,
  // DrinksItem,
  // DrinksInfo,
  // DrinksName,
  // ButtonDel,
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
        <Text textAlign="center">
          You haven't added any favorite cocktails yet{' '}
        </Text>
      )} */}
      <DrinksListBlock>
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
      </DrinksListBlock>
    </>
  );
};

export default DrinksList;
