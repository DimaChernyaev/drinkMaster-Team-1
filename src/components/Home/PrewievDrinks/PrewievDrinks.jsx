import { CardCoctali } from '../../../helpers/CardCoctail/CardCoctail';
import { List } from './PrewievDrinks.styled';

export const PrewievDrinks = ({ drinks }) => {
  return (
    <>
      {drinks.map(([title, coctails]) => {
        return (
          <div>
            <h2>{title}</h2>
            <List>
              {coctails.map(({ _id, drink, drinkThumb }) => (
                <CardCoctali _id={_id} drink={drink} drinkThumb={drinkThumb} />
              ))}
            </List>
          </div>
        );
      })}
    </>
  );
};
