import { useEffect, useState } from 'react';
import { getPopularCoctails } from '../../../helpers/API/operationsDrinks';
import { Link } from 'react-router-dom';
import {
  PopularCoctailsTitle,
  PopularCoctailsWrapper,
  PopularCoctailsImage,
  PopularCoctailsText,
  PopularCoctailsName,
  PopularCoctailsDescription,
} from './PopularDrink.styled';

const PopularDrink = () => {
  const [popularCoctails, setPopularCoctails] = useState([]);

  useEffect(() => {
    const fetchPopularCoctails = async () => {
      try {
        const data = await getPopularCoctails();
        setPopularCoctails(data);
      } catch (error) {
        console.error('Error fetching drinks:', error);
      }
    };

    fetchPopularCoctails();
  }, []);

  return (
    <>
      <PopularCoctailsTitle>PopularDrink</PopularCoctailsTitle>
      {popularCoctails.map(({ drinkThumb, drink, description, _id }, index) => {
        return (
          <Link key={index} to={`/drink/${_id}`}>
            <PopularCoctailsWrapper>
              <PopularCoctailsImage src={drinkThumb} alt={drink} />
              <PopularCoctailsText>
                <PopularCoctailsName>{drink}</PopularCoctailsName>
                <PopularCoctailsDescription>
                  {description}
                </PopularCoctailsDescription>
              </PopularCoctailsText>
            </PopularCoctailsWrapper>
          </Link>
        );
      })}
    </>
  );
};

export default PopularDrink;
