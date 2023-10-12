import ErrorPage from '../../../pages/ErrorPage/ErrorPage';
import Paginator from '../../Paginator/Paginator';
import { Loader } from '../../Loader/Loader.styled';
import { ThreeDots } from 'react-loader-spinner';
import {Styled_CardListDiv, CardList } from '../../Drinks/DrinksGallery/DrinksGallery.styled';
import {CardCoctali } from '../../../helpers/CardCoctail/CardCoctail';


// Компонент DrinksGallery. Рендерить галерею напоїв та уомпонент пагінації Paginator.
const DrinksGallery = ({drinkItems, isEmpty, isLoading, onClickPaginator, pageCount}) => {

    const handlePageClick = (event) => { onClickPaginator(event.selected) };  // повертаємо вгору в компонент DrinksPage номер сторінки, яку натиснули в пагінації 

    return (
        <>
            {
                (!isEmpty) 
                ?   <Styled_CardListDiv>
                        <CardList>
                            {
                                drinkItems.map( ({ _id, drink, drinkThumb }) => { 
                                    return <CardCoctali _id={_id} drink={drink} drinkThumb={drinkThumb} key={_id} />
                                })
                            }
                        </CardList>
                    </Styled_CardListDiv>

                :   <ErrorPage />
            }

            { isLoading && (<Loader>{' '} <ThreeDots color="#f3f3f3" width="60" /></Loader> ) }

            <Paginator  
                pageCount={pageCount}
                handlePageClick={handlePageClick} 
            />
        </>
    )
};

  export default DrinksGallery;