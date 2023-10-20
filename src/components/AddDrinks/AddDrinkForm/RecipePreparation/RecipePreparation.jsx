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
          htmlFor="instructions"
          $isFocusedDescription={$isFocusedDescription}
          $hasValueDescription={$hasValueDescription}
        >
          Enter the recipe
        </RecipeLabel>
        <RecipeTextarea
          id="instructions"
          name="instructions"
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
          value={values.instructions}
          placeholder=" "
        />
        {touched.instructions && errors.instructions ? (
          <FormError>{errors.instructions}</FormError>
        ) : null}
      </RecipeWrapper>
    </>
  );
};

export default RecipePreparation;
