import {useState, useEffect} from 'react';
import CreatableSelect from 'react-select/creatable';
import Creatable from 'react-select/creatable';
import createSelectOptions from '../../helpers/createSelectOptions';
import {ImSearch} from 'react-icons/im';
import {getCoctailsByFilter} from '../../helpers/API/operationsDrinks';
import { 
        FilterStyles, 
        FilterForm,
        LabelInputStyles, 
        InputStyles, 
        LookUpButton, 
        LookUpButtonSpan, 
        LookUpIcon,
        // IngredientsSelect,
      } from './Filter.styled';
  // CreatableInputStyles, CreatableSelectStyles } from './Filter.styled';


//компонент Filter для сторінки Drinks Page ---------------------------------------------------------------------------------

  const Filter = ( {categoryList, ingredientList, page, per_page, onChangeFilter} ) => {
      
      //стан
  //    const [inputKeyword, setInputKeyword] = useState("");
      const [keyword, setKeyword] = useState("");
      const [category, setCategory] = useState("");
      const [ingredient, setIngredient] = useState("");
      
      //Use effect при кожній зміні полів фільтра
      useEffect(()=>{
        // const abortCtrl = new AbortController();
        const handleChangeFilter = () => { onChangeFilter(keyword, category, ingredient, page="1", per_page="10"); }
        handleChangeFilter();
      },[category, ingredient, page, per_page]);

    
      //обробка пропсів елементів CreatableSelect
       // const createOption = label => ({ label,  value: label })
    
        const handleInputChange = (e) => { setKeyword(e.target.value);}
    
        const onSubmitForm = (event) =>{
          event.preventDefault();
          setKeyword("");
          onChangeFilter(keyword, category, ingredient, page, per_page);
        }

        const handleCategoryChange = (option, action) => { 
          if (option) {setCategory(option.value);}
          else {setCategory("");}
        }
        
        const handleIngredientsChange = (option, action) => { 
          if (option) { setIngredient(option.value) }
          else {setIngredient("");}
        }

        return (
            
            <FilterStyles>
           
              <FilterForm onSubmit={onSubmitForm}>
                
                <LabelInputStyles>
                  <InputStyles
                    type = "text"
                    placeholder = "Enter the text"
                    id={"inputKeyword"}  
                    value={keyword}
                    onChange={handleInputChange}
                  />
                </LabelInputStyles>

                <LookUpButton type="submit">
                  <LookUpButtonSpan>
                    <LookUpIcon/>
                  </LookUpButtonSpan>
                </LookUpButton>

                {/* caregory select */}
                  <CreatableSelect
                      isClearable
                      placeholder = "All categories"
                      options={createSelectOptions(categoryList)}
                      onChange={handleCategoryChange}
                      // styles={CreatableSelectStyles}
                  />

                {/* ingredient select */}
                <CreatableSelect
                    isClearable
                    placeholder = "Ingredients"
                    options={createSelectOptions(ingredientList)}
                    onChange={handleIngredientsChange}
                    // styles={IngredientsSelect}
                />

             </FilterForm>
            </FilterStyles>
            
        )

  }

//---------------------------------------------------------------------------------------------------------------------------

export default Filter;