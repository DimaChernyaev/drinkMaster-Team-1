import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Select from 'react-select';

// import {ImSearch} from 'react-icons/im';
// import CreatableSelect from 'react-select/creatable';
// import createSelectOptions from "../../helpers/createSelectOptions";

import Filter from './Filter';
import NotFound from '../NotFound/NotFound';
import DrinkCard from '../DrinkCard/DrinkCard';
import  Paginator  from '../Paginator/Paginator';

import {getCoctailsByFilter} from '../../helpers/API/operationsDrinks';


//компонент Drinks (рендериться в Drinks page, рендерить компоненти Filters, Paginator, NotFound і список напоїв ---------------

const Drinks = ({categoryList=[], ingredientList=[]}) => {
   
    // const [keyword, setKeyword] = useState("");
    // const [category, setCategory] = useState("");
    // const [ingredient, setIngredient] = useState("");
    const [drinkItems, setDrinkItems] = useState([]);
    const [page, setPage] = useState(1);
    const [per_page, setPerPage] = useState(10);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(()=>{
    //     // const abortCtrl = new AbortController();

    //     //робимо запит на сервер щоб отримати список напоїв згідно філбтрів, що є в стейті
    //     const getPopularDrinks = async (keyword, category, ingredient, page="1", per_page="10") => {
    //       console.log("Я в getPopularDrinks", keyword, category, ingredient);
    //       try {
    //           setIsLoading(true);
    //           const {drinks} = await getCoctailsByFilter(keyword, category, ingredient, page, per_page); //, abortCtrl.signal);
    //           setDrinkItems(drinks); 
    //       }
    //       catch(error) {if (error.code !== 'ERR_CANCELED') {
    //         console.log(error);
    //         throw Error("Oops! Something went wrong! Try reloading the page!");
    //       }}
    //       finally {setIsLoading(false);}
    //     };
    //     getPopularDrinks(keyword, category, ingredient, page, per_page);
      

    //   },[category, ingredient, keyword, page, per_page]);

      // const onChangeKeyword =(e)=>{ setKeyword(e)};      
      // const onChangeCategory = (value) => { setCategory(value)};
      // const onChangeIndregient =(value)=>{ setIngredient(value)}; 
      
    return (
    <>
      
      <Filter 
        categoryList ={categoryList}
        ingredientList ={ingredientList}
        passDataToDrinks={(data)=>{console.log(data); setDrinkItems(data)} }
      />

      {(drinkItems.lenght !== 0 ) ? 
            <>
              <div>
                  <ul> 
                      {drinkItems.map(item => <DrinkCard drinkItem={item} id={item.id} key={item.id}/>)} 
                  </ul>
              </div>

              {/* < Paginator changeQuery={this.onchangeQuery} /> */}
            </>
        : <NotFound/>
      }
    </>
  );

};

export default Drinks;