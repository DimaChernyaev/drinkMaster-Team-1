import { CardCoctali } from '../../../helpers/CardCoctail/CardCoctail';
import { List, Title } from './PrewievDrinks.styled';

export const PrewievDrinks = ({ drinks }) => {
  return (
    <>
      {drinks.map(([title, coctails]) => {
        return (
          <div>
            <Title>{title}</Title>
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
