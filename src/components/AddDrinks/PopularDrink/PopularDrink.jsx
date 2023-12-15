import { useEffect, useState } from 'react';
import { getPopularCoctails } from '../../../helpers/API/operationsDrinks';
import { Link } from 'react-router-dom';
import {
  PopularWrapper,
  PopularCoctailsTitle,
  PopularCoctailsWrapper,
  PopularCoctailsImage,
  PopularCoctailsText,
  PopularCoctailsName,
  PopularCoctailsDescription,
} from './PopularDrink.styled';
import LoaderDots from '../../Loader/LoaderDots';

const PopularDrink = () => {
  const [popularCoctails, setPopularCoctails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchPopularCoctails = async () => {
      try {
        const data = await getPopularCoctails();
        setPopularCoctails(data);
      } catch (error) {
        console.error('Error fetching drinks:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularCoctails();
  }, []);

  return (
    <>
      <PopularCoctailsTitle>PopularDrink</PopularCoctailsTitle>
      {isLoading ? (
        <LoaderDots />
      ) : (
        <PopularWrapper>
          {' '}
          {popularCoctails
            .slice(0, 4)
            .map(({ drinkThumb, drink, description, _id }, index) => {
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
        </PopularWrapper>
      )}
    </>
  );
};

export default PopularDrink;
