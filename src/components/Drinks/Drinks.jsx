import { useState, useEffect } from 'react';
import Filter from './Filter/Filter';
import DrinksGallery from './DrinksGallery/DrinksGallery';
import { getCoctailsByFilter } from '../../helpers/API/operationsDrinks';


// Компонент Drinks: рендерить компоненти Filter, DrinksGallery -------------------------------------------------------------

const Drinks = ({categoryList, ingredientList}) => {

    //стан
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [drinkItems, setDrinkItems] = useState([]);
    const [totalDrinks, setTotalDrinks] = useState(0);
    const [page, setPage] = useState(1);
    const [per_page] = useState(window.innerWidth >= 1280 ? 9 : 10);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    //useEffect спрацює один раз при монтуванні компонента: дістане з БД списки категорій та інгредієнтів і занесе їх в стан
    useEffect(() => {
        
        //Запит на сервер для отримання списку напоїв по фільтрам зі стану.
        const getPopularDrinks = async (keyword = '', category = '',ingredient = '', page = 1, per_page = 10 ) => {
            
            try {
                setIsLoading(true);
                const { drinks, totalResults } = await getCoctailsByFilter(keyword, category, ingredient, page, per_page);
                setTotalDrinks(totalResults);

                if (drinks.length === 0) {
                    setIsEmpty(true);
                } else {
                    setIsEmpty(false);
                }
    
                setDrinkItems(drinks);

            } catch (error) {
                if (error.code !== 'ERR_CANCELED') {
                    console.log(error);
                    throw Error('Oops! Something went wrong! Try reloading the page!');
                }
            } finally {
                setIsLoading(false);
            }
        };
        getPopularDrinks(keyword, category, ingredient, page, per_page);

    }, [keyword, category, ingredient, page]);
    

    const onChangeFilter = (label, value='') => {
        switch (label) {
            case 'keyword': 
                    setKeyword(value); 
                    setPage(1);
                    break;
            case 'category': 
                    setCategory(value);
                    setPage(1);
                    break;
            case 'ingredient': 
                    setIngredient(value);
                    setPage(1);
                    break;
            default: 
                    break;
        }
    };

    const onClickPaginator = (pageNumber) => {
        if (pageNumber < Math.ceil(totalDrinks/per_page)) {
            setPage(pageNumber+1);                              // рахунок сторінок в state йде від 1, а в пагінаторі від 0 , тому додаємо 1
        }
        
    };


    return (
      <>

        <Filter 
            categoryList={categoryList} 
            ingredientList={ingredientList}
            onChangeFilter={onChangeFilter}
        />

        <DrinksGallery 
            keyword = {keyword}
            category = {category}
            ingredient = {ingredient}
            drinkItems = {drinkItems}
            isEmpty = {isEmpty} 
            isLoading = {isLoading}
            onClickPaginator = {onClickPaginator}
            pageCount={Math.ceil(totalDrinks/per_page)}
        />

      </>
    );
};

// -------------------------------------------------------------------------------------------------------------------------

export default Drinks;
