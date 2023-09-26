import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {ImSearch} from 'react-icons/im';
import Select from 'react-select';
import createSelectOptions from "../../helpers/createSelectOptions";

import NotFound from '../NotFound/NotFound';
import DrinkCard from '../DrinkCard/DrinkCard';
import  Paginator  from '../Paginator/Paginator';

import {getCoctailsByFilter} from '../../helpers/API/operationsDrinks';


//компонент Drinks (рендериться в Drinks page, рендерить компоненти Filters, Paginator, NotFound і список напоїв ---------------

const Drinks = ({categoryList, ingredientList}) => {
   
    //console.log("Drinks отримує categoryList = ", categoryList);
    
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [drinkItems, setDrinkItems] = useState([]);
    const [page, setPage] = useState(1);
    const [per_page, setPerPage] = useState(10);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        const abortCtrl = new AbortController();

        //робимо запит на сервер щоб отримати список напоїв згідно філбтрів, що є в стейті
        const getPopularDrinks = async (category, ingredient, keyword, page="1", per_page="10") => {
          try {
              setIsLoading(true);
              const {drinks} = await getCoctailsByFilter(category, ingredient, keyword, page, per_page); //, abortCtrl.signal);
              setDrinkItems(drinks); 
          }
          catch(error) {if (error.code !== 'ERR_CANCELED') {
            console.log(error);
            throw Error("Oops! Something went wrong! Try reloading the page!");
          }}
          finally {setIsLoading(false);}
        };
        getPopularDrinks(category, ingredient, keyword, page, per_page);
      
        // return ()=>{ abortCtrl.abort(); 
      },[category, ingredient, keyword, page, per_page]);


    const onChangeKeyword =(value)=>{setKeyword(value)};         // доробити
    const onChangeCategory =(value)=>{setCategory(value)};      // доробити
    const onChangeIndregient =(value)=>{setIngredient(value)}; // доробити

  return (
    <>
       
      <form >

      <button type="submit"><span><ImSearch/></span></button>

      <input
          type="text"
          placeholder="Enter the text"
          id="input"
          value={keyword}
          onChange={onChangeKeyword} 
      />

      <Select 
        value={category}
        name="All categories"
        defaultValue={"All categories"}
        options={createSelectOptions(categoryList)}
        onChange={onChangeCategory}
      /> 

      <Select 
        value={ingredient}
        name="Ingredients"
        options={createSelectOptions(ingredientList)}
        onChange={onChangeIndregient}
        // styles = {selectStyles}
      /> 


      {/* selectProps={onSelectCategory}/>

      {/* value={value}
      isMulti
      styles={styles}
      isClearable={value.some((v) => !v.isFixed)}
      name="colors"
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={onChange}
      options={colourOptions} */}



      </form>    


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