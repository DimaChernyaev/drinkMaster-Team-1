import { useState } from 'react';

import {
  FormError,
  RecipeTitle,
  RecipeWrapper,
  RecipeLabel,
  RecipeTextarea,
} from './RecipePreparation.styled';

const RecipePreparation = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => {

  const [$isFocusedDescription, setIsFocusedDescription] = useState(false);
  const [$hasValueDescription, setHasValueDescription] = useState(false);

    const handleDescriptionChange = (e) => {
      const { value } = e.target;
      setHasValueDescription(value.trim().length > 25);
    };
  
  return (
    <>
      <RecipeTitle>Recipe Preparation</RecipeTitle>
      <RecipeWrapper>
              <RecipeLabel
        htmlFor="preparationInstructions"
        $isFocusedDescription={$isFocusedDescription}
        $hasValueDescription={$hasValueDescription}
      >
        Enter the recipe
      </RecipeLabel>
      <RecipeTextarea
        id="preparationInstructions"
        name="preparationInstructions"
        rows="6"
        onChange={(e) => {
          handleDescriptionChange(e);
          handleChange(e);
        }}
        onBlur={(e) => {
          setIsFocusedDescription(false);
          handleBlur(e);
        }}
        onFocus={() => setIsFocusedDescription(true)}
        value={values.preparationInstructions}
        placeholder=" "
      />
      {touched.preparationInstructions && errors.preparationInstructions ? (
        <FormError>{errors.preparationInstructions}</FormError>
      ) : null}
      </RecipeWrapper>

    </>
  );
};

export default RecipePreparation;
