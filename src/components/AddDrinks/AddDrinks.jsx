import PageTitle from '../DefaultComponents/PageTitle/PageTitle';
import AddDrinkForm from './AddDrinkForm/AddDrinkForm';
import FollowUs from './FollowUs/FollowUs';
import PopularDrink from './PopularDrink/PopularDrink';


const AddDrinks = () => {
  return (
    <>
      <PageTitle title="Add drink" />
      <AddDrinkForm />
      <FollowUs />
      <PopularDrink />
    </>
  );
};

export default AddDrinks;
