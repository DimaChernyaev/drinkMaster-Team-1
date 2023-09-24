import { useState } from 'react';

import {
  ImageWrapper,
  ImageInputWrapper,
  ImageInput,
  ImageLabel,
  NameInputWrapper,
  NameWrapper,
  NameLabel,
  NameInput,
  RecipeWrapper,
  RecipeLabel,
  RecipeTextarea,
  CategoryWrapper,
  CategoryLabel,
  CategorySelect,
  ServingWrapper,
  ServingLabel,
  ServingSelect,
  Wrapper,
  RadioWrapper,
  //  Label,
  RadioLabel,
  RadioInput,
  RadioSpan,
  FormError,
} from './DrinkDescriptionFields.styled';

// Компонент для полей описания коктейля
const DrinkDescriptionFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFieldValue('image', file);
  };

  const [$isFocused, setIsFocused] = useState(false);
  const [$hasValue, setHasValue] = useState(false);

  const [$isFocusedDescription, setIsFocusedDescription] = useState(false);
  const [$hasValueDescription, setHasValueDescription] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setHasValue(value.trim().length > 1);
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setHasValueDescription(value.trim().length > 25);
  };

  return (
    <>
      <ImageWrapper>
        <ImageInputWrapper>
          <ImageInput
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
          />
          <ImageLabel htmlFor="image">
            {' '}
            <span>+</span>Add image
          </ImageLabel>
        </ImageInputWrapper>
        {touched.image && errors.image ? <div>{errors.image}</div> : null}
      </ImageWrapper>

      <NameWrapper>
        <NameInputWrapper>
          <NameLabel
            htmlFor="name"
            $isFocused={$isFocused}
            $hasValue={$hasValue}
          >
            Enter item title
          </NameLabel>
          <NameInput
            type="text"
            id="name"
            name="name"
            onChange={(e) => {
              handleInputChange(e);
              handleChange(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              handleBlur(e);
            }}
            onFocus={() => setIsFocused(true)}
            value={values.name}
            placeholder=" "
          />
          {touched.name && errors.name ? (
            <FormError>{errors.name}</FormError>
          ) : null}
        </NameInputWrapper>
      </NameWrapper>

      <RecipeWrapper>
        <RecipeLabel
          htmlFor="description"
          $isFocusedDescription={$isFocusedDescription}
          $hasValueDescription={$hasValueDescription}
        >
          Enter about recipe
        </RecipeLabel>
        <RecipeTextarea
          rows={1}
          maxLength={234}
          id="description"
          name="description"
          onChange={(e) => {
            handleDescriptionChange(e);
            handleChange(e);
          }}
          onBlur={(e) => {
            setIsFocusedDescription(false);
            handleBlur(e);
          }}
          onFocus={() => setIsFocusedDescription(true)}
          value={values.description}
          placeholder=" "
        />
        {touched.description && errors.description ? (
          <FormError>{errors.description}</FormError>
        ) : null}
      </RecipeWrapper>

      <CategoryWrapper>
        Category
        <CategoryLabel htmlFor="category"></CategoryLabel>
        <CategorySelect
          id="category"
          name="category"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.category}
        >
          <option value="">Cocktail</option>

          {/* Опції для вибору категорії коктейлю */}
        </CategorySelect>
      </CategoryWrapper>
      {touched.category && errors.category ? (
        <FormError>{errors.category}</FormError>
      ) : null}

      <ServingWrapper>
        Glass
        <ServingLabel htmlFor="serving"></ServingLabel>
        <ServingSelect
          id="serving"
          name="serving"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.serving}
        >
          <option value="">Serving</option>

          {/* Опції для вибору типу сервування */}
        </ServingSelect>
      </ServingWrapper>
      {touched.serving && errors.serving ? (
        <FormError>{errors.serving}</FormError>
      ) : null}

      <Wrapper>
        <RadioWrapper>
          <RadioLabel
            className={values.isAlcoholic === 'true' ? 'checked' : ''}
          >
            <RadioInput
              type="radio"
              name="isAlcoholic"
              value="true"
              checked={values.isAlcoholic === 'true'}
              onChange={handleChange}
            />
            <RadioSpan></RadioSpan>
            Alcoholic
          </RadioLabel>
          <RadioLabel
            className={values.isAlcoholic === 'false' ? 'checked' : ''}
          >
            <RadioInput
              type="radio"
              name="isAlcoholic"
              value="false"
              checked={values.isAlcoholic === 'false'}
              onChange={handleChange}
            />
            <RadioSpan></RadioSpan>
            Non-alcoholic
          </RadioLabel>
        </RadioWrapper>
        {touched.isAlcoholic && errors.isAlcoholic ? (
          <FormError>{errors.isAlcoholic}</FormError>
        ) : null}
      </Wrapper>
    </>
  );
};

export default DrinkDescriptionFields;
