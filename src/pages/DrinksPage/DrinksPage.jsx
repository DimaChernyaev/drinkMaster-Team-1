import Drinks from '../../components/Drinks/Drinks';
import { useState, useEffect } from 'react';
import {getCategories} from '../../helpers/API/operationsFilters';
import {getIngredients} from '../../helpers/API/operationsFilters';

// Сторінка Drinks: рендерить компонент Drinks і передає йому як пропси списки котегорій та інгредієнтів для фільтрів Select
const DrinksPage = () => {

        //списки категорій та інгредієнтів для фільтрів select
        const [categoryList, setCategoryList] = useState([]);
        const [ingredientList, setIngredientList] = useState([]);

         useEffect(()=>{

                const  getCategoryList = async ()=>{
                        try{
                                const data = await getCategories();
                                setCategoryList(data);
                        }
                        catch(error){
                                if (error.code !== 'ERR_CANCELED') {
                                        console.log(error);
                                        throw Error("Oops! Something went wrong! Try reloading the page!");
                                }
                }
                };
                getCategoryList();

                const getIngredientList = async()=>{
                        try{
                                const data = await getIngredients();
                                const titles = data.map(item => item.title);
                                setIngredientList(titles);
                        } catch(error){
                                if (error.code !== 'ERR_CANCELED') {
                                        console.log(error);
                                        throw Error("Oops! Something went wrong! Try reloading the page!");
                                }
                        }
                }; 
                getIngredientList(); 
         },[]);


        return (  <>
                        <h1>Drinks</h1>  
                        <Drinks categoryList={categoryList} ingredientList={ingredientList}/>
                  </>
                )
};

export default DrinksPage;
