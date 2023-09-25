import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import {ImSearch} from 'react-icons/im';
import Select from 'react-select'


//-------------------------------------------------------------------
const Filters = ({category, ingredient, keyword}) => {

  useEffect(()=>{
    
    return ()=>{abortCtrl.abort();};

  },[keyword, category, ingredient]);


  const onChangeKeywordFilter = event => {
    console.log(event.target);
    setFilter(event.target.value);
  }
  const onSelectCategory = event => {
    console.log(event.target);
    setFilter(event.target.value);
  }
  const onSelectIngredient = event => {
    console.log(event.target);
    setFilter(event.target.value);
  }
  const onSubmitForm = event => {
    event.preventDefault();
    changeQuery(keyword, category, ingredient );
  };

  return (
    
            <form onSubmit={onSubmitForm}>

                <button type="submit"><span><ImSearch/></span></button>

                <input
                    type="text"
                    placeholder="Enter the text"
                    id="input"
                    value={keyword}
                    onChange={onChangeKeywordFilter} 
                />

                <Select options={categoryList} selectOption={category} selectProps={onSelectCategory}/>

                <Select ingredient={ingredientList} selectOption={ingredient} selectProps={onSelectIngredient}/>

            </form>    
    
  );
};

//-------------------------------------------------------------------

export default Filters;
