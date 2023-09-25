import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import DrinkCard from '../DrinkCard/DrinkCard';
import  Paginator  from '../Paginator/Paginator';
import {getCoctailsByFilter} from '../../helpers/API/operationsDrinks';


const Drinks = () => {
  
  const [keyword, setkeyword] = useState("");
  const [category, setcategory] = useState("");
  const [ingredient, setingredient] = useState("");
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [per_page, setPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(false);


  // useEffect спрацьовує коли змінюється одне із значень : keyword, category, ingredient, page, per_page
  useEffect(()=>{
      const abortCtrl = new AbortController();

      const getPopularDrinks = async (category="", ingredient="", keyword="", page="1", per_page="10") => {
        console.log(category, ingredient, keyword, page, per_page)
        try {
            setIsLoading(true);
            const {drinks} = await getCoctailsByFilter(category, ingredient, keyword, page, per_page); //, abortCtrl.signal);
            setItems(items=>drinks); 
        }
        catch(error) {if (error.code !== 'ERR_CANCELED') {
          console.log(error);
          throw Error("Oops! Something went wrong! Try reloading the page!");
        }}
        finally {setIsLoading(false);}
      };
      getPopularDrinks(category, ingredient, keyword, page, per_page);
    
      return ()=>{ abortCtrl.abort(); };
  },[category, ingredient, keyword, page, per_page]);



  return (
    <>
      {/* <Filter keyword={keyword} category={category} ingredient={ingredient}/> */}
      {(items.lenght !== 0 ) ? 
            <>
              <div>
                  <ul> 
                      {items.map(item => <DrinkCard drinkItem={item} key={item.id}/>)} 
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
