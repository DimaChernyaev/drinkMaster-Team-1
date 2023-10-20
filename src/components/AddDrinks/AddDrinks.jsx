import AddDrinkForm from './AddDrinkForm/AddDrinkForm';
import {
  TotalWrapper,
  TotalLinkWrspper,
  AddDrinkTitle,
} from './AddDrinks.styled';
import FollowUs from './FollowUs/FollowUs';
import PopularDrink from './PopularDrink/PopularDrink';

const AddDrinks = () => {
  return (
    <>
      <AddDrinkTitle>Add drink</AddDrinkTitle>
      <TotalWrapper>
        <AddDrinkForm />
        <TotalLinkWrspper>
          <FollowUs />
          <PopularDrink />
        </TotalLinkWrspper>
      </TotalWrapper>
    </>
  );
};

export default AddDrinks;
