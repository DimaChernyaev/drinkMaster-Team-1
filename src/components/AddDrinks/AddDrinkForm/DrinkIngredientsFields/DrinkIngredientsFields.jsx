import { useEffect, useState } from 'react';
import { getIngredients } from '../../../../helpers/API/operationsFilters';

import {
  FormError,
  IngredientsWrapper,
  ControlWrapper,
  Controls,
  ControlsButton,
  ControlMinuse,
  ControlPluse,
  IngredientsWrapperSelect,
  IngredientsTitle,
  IngredientsInput,
  IngredientsSelect,
  IngredientsDelete,
  IngredientsDeleteButton,
} from './DrinkIngredientsFields.styled';

const DrinkIngredientsFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await getIngredients();
        const ingredientOptions = ingredients.map((ingredient) => ({
          label: ingredient.title,
          value: ingredient.title,
        }));
        setOptions(ingredientOptions);
      } catch (error) {
        console.error('Ошибка при загрузке ингридиента:', error);
      }
    }

    fetchIngredients();
  }, []);

  const handleSelectChange = (selectedOption, index) => {
    const { value } = selectedOption;
    setFieldValue(`ingredients[${index}].title`, value);
    setSelectedOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index] = selectedOption;
      return newOptions;
    });
  };

  const handleAddIngredient = () => {
    const newIngredient = { name: '' };
    setFieldValue('ingredients', [...values.ingredients, newIngredient]);
    setSelectedOptions((prevOptions) => [...prevOptions, null]);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...values.ingredients];
    newIngredients.splice(index, 1);
    setFieldValue('ingredients', newIngredients);
    setSelectedOptions((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions.splice(index, 1);
      return newOptions;
    });
  };

  const isRemoveButtonDisabled = values.ingredients.length === 1;

  return (
    <IngredientsWrapper>
      <ControlWrapper>
        <IngredientsTitle>Ingredients</IngredientsTitle>
        <Controls>
          <ControlsButton
            type="button"
            onClick={() =>
              handleRemoveIngredient(values.ingredients.length - 1)
            }
            disabled={isRemoveButtonDisabled}
          >
            <ControlMinuse></ControlMinuse>
          </ControlsButton>
          <div>{values.ingredients.length}</div>
          <ControlsButton type="button" onClick={handleAddIngredient}>
            <ControlPluse></ControlPluse>
          </ControlsButton>
        </Controls>
      </ControlWrapper>

      {values.ingredients.map((ingredient, index) => (
        <IngredientsWrapperSelect key={index}>
          <IngredientsSelect
            name={`ingredients[${index}].title`}
            options={options}
            value={selectedOptions[index]}
            onChange={(selectedOption) =>
              handleSelectChange(selectedOption, index)
            }
            onBlur={handleBlur}
          ></IngredientsSelect>

          <IngredientsInput
            type="text"
            name={`ingredients[${index}].measure`}
            placeholder="1 cl"
            value={ingredient.measure || ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <IngredientsDeleteButton
            type="button"
            onClick={() => handleRemoveIngredient(index)}
            disabled={isRemoveButtonDisabled}
          >
            <IngredientsDelete></IngredientsDelete>
          </IngredientsDeleteButton>

          {touched.ingredients &&
          errors.ingredients &&
          touched.ingredients[index] &&
          errors.ingredients[index] ? (
            <FormError>{errors.ingredients[index].title}</FormError>
          ) : null}
        </IngredientsWrapperSelect>
      ))}
    </IngredientsWrapper>
  );
};

export default DrinkIngredientsFields;
