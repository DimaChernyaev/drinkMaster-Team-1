import {useState, useEffect} from 'react';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import createSelectOptions from '../../helpers/createSelectOptions';
import {getCoctailsByFilter} from '../../helpers/API/operationsDrinks';
import { 
        FilterStyles, 
        FilterForm,
        Styled_InputLabel, 
        Styled_Input, 
        LookUpButton, 
        Styled_Span_for_Input_and_LookUpBtn, 
        LookUpIcon,
        CreatableSelectStyles,
      } from './Filter.styled';
  

//компонент Filter для сторінки Drinks Page ---------------------------------------------------------------------------------

  const Filter = ( {categoryList, ingredientList, page, per_page, onChangeFilter} ) => {
      
      //стан
      const [keyword, setKeyword] = useState("");
      const [category, setCategory] = useState("");
      const [ingredient, setIngredient] = useState("");
      
      //Use effect при кожній зміні полів фільтра
      useEffect(()=>{
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
              
                  <Styled_InputLabel>

                    <Styled_Span_for_Input_and_LookUpBtn>

                        <Styled_Input
                          type = "text"
                          placeholder = "Enter the text"
                          id={"inputKeyword"}  
                          value={keyword}
                          onChange={handleInputChange}
                        />

                        <LookUpButton type="submit"> 
                            <LookUpIcon/>
                        </LookUpButton>

                    </Styled_Span_for_Input_and_LookUpBtn>

                  </Styled_InputLabel>
                
                

                {/* caregory select */}
                  <Select
                      //isClearable
                      placeholder = "All categories"
                      options={createSelectOptions(categoryList)}
                      onChange={handleCategoryChange}
                      //menuIsOpen={true}
                      styles={CreatableSelectStyles('405px','297px')} 
                      emotion={"any"}
                  />

                {/* ingredient select */}
              <Select
                    //isClearable
                    placeholder = "Ingredients"
                    options={createSelectOptions(ingredientList)}
                    onChange={handleIngredientsChange}
                    styles={CreatableSelectStyles('295px','276px')}
                />
       
             </FilterForm>
            </FilterStyles>
            
        )

  }

//---------------------------------------------------------------------------------------------------------------------------

export default Filter;