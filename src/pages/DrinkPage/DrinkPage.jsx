import { useParams } from 'react-router-dom';
import Drink from '../../components/Drink/Drink';

const DrinkPage = () => {
  const {drinkId} = useParams()
  return <Drink id={drinkId}/>;
};

export default DrinkPage;
