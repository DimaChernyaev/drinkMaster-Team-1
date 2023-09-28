import {useState, useEffect} from 'react';
import CreatableSelect from 'react-select/creatable';
import Creatable from 'react-select/creatable';
import createSelectOptions from '../../helpers/createSelectOptions';
import {ImSearch} from 'react-icons/im';
import {getCoctailsByFilter} from '../../helpers/API/operationsDrinks';

const Filter = ( {categoryList, ingredientList, page, per_page, passDataToDrinks} ) => {
    
    const [inputKeyword, setInputKeyword] = useState("");
    const [keyword, setKeyword] = useState("");
  
    const [category, setCategory] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=>{
      // const abortCtrl = new AbortController();

      //робимо запит на сервер щоб отримати список напоїв згідно філбтрів, що є в стейті
      const getPopularDrinks = async (inputkeyword, category, ingredient, page="1", per_page="10") => {
        // console.log("Я в getPopularDrinks")
        // console.log("inputkeyword=", inputkeyword);
        // console.log("category=", category)
        // console.log("ingredient=", ingredient)
        try {
            setIsLoading(true);
            const {drinks} = await getCoctailsByFilter(inputKeyword, category, ingredient, page, per_page); //, abortCtrl.signal);
            //console.log("drinks=", drinks);
            passDataToDrinks(drinks);
        }
        catch(error) {if (error.code !== 'ERR_CANCELED') {
          console.log(error);
          throw Error("Oops! Something went wrong! Try reloading the page!");
        }}
        finally {
          setIsLoading(false);
        }
      };
      getPopularDrinks(keyword, category, ingredient, page, per_page);
    },[category, ingredient, inputKeyword, page, per_page]);

  
      const handleChange = (field, value) => {
        switch (field) {
          case 'keyword':
            setKeyword(value);
            break
          default:
            break
        }
      }

       const handleKeyDown = event => {
        if (!inputKeyword) return;
        switch (event.key) {
          case 'Enter':
          case 'Tab':
            if (keyword){
              setKeyword([...keyword, createOption(inputKeyword)]);
              setInputKeyword('');
            }
            event.preventDefault();
            break
          default:
            break
        }
      }

      const createOption = label => ({ label,  value: label })

      const handleInputKeyword =(value)=>{ setInputKeyword(value)}

      const handleCategoryChange = (option, action) => { 
        if (option) {setCategory(option.value);}
        else {setCategory("");}
      }

      const handleIngredientsChange = (option, action) => { 
        if (option) { setIngredient(option.value) }
        else {setIngredient("");}
      }

      return (

        <div className='container'>

            {/* keywork input */}
            <CreatableSelect
              isClearable
              menuIsOpen={false}
              placeholder = "Enter the text"
              components={{ DropdownIndicator: null }}
              inputValue={inputKeyword}
              value={keyword}
              onChange={(value) => handleChange('keyword', value)}
              onKeyDown={handleKeyDown}
              onInputChange={handleInputKeyword}
            />

            {/* caregory select */}
            <CreatableSelect
                isClearable
                //placeholder = "All categories"
                options={createSelectOptions(categoryList)}
                onChange={handleCategoryChange}
            />

            {/* ingredient select */}
            <CreatableSelect
                isClearable
                placeholder = "Ingredients"
                options={createSelectOptions(ingredientList)}
                onChange={handleIngredientsChange}
            />


        </div>

      )

}

export default Filter;