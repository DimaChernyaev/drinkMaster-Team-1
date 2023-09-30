import { useState, useEffect } from 'react';

import {
  getCategories,
  getGlasses,
} from '../../../../helpers/API/operationsFilters';

import {
  ImageWrapper,
  ImageDrink,
  ImageInputWrapper,
  ImageInput,
  ImageLabel,
  PlusSVG,
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

const DrinkDescriptionFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const [categoryOptions, setCategoriesOptions] = useState([]);
  const [selectedCategoriesOption, setSelectedCategoriesOption] = useState([]);

  const [glasseOptions, setGlassesOptions] = useState([]);
  const [selectedGlassesOption, setSelectedGlassesOption] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await getCategories();
        const categoryOptions = categories.map((category) => ({
          value: category,
          label: category,
        }));

        setCategoriesOptions(categoryOptions);
      } catch (error) {
        console.error('Ошибка при загрузке категорий:', error);
      }
    }
    async function fetchGlasses() {
      try {
        const glasses = await getGlasses();
        const glassesOptions = glasses.map((glasse) => ({
          value: glasse,
          label: glasse,
        }));
        setGlassesOptions(glassesOptions);
      } catch (error) {
        console.error('Ошибка при загрузке категорий:', error);
      }
    }

    fetchCategories();
    fetchGlasses();
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  const [$isFocused, setIsFocused] = useState(false);
  const [$hasValue, setHasValue] = useState(false);

  const [$isFocusedDescription, setIsFocusedDescription] = useState(false);
  const [$hasValueDescription, setHasValueDescription] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFieldValue('image', file);
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      setSelectedImage(null);
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setHasValue(value.trim().length > 1);
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setHasValueDescription(value.trim().length > 25);
  };

  const handleSelectCategoriesChange = (selectedOption) => {
    setSelectedCategoriesOption(selectedOption);
    setFieldValue(`category`, selectedOption.value); // Установите значение в формик
  };

  const handleSelectGlassesChange = (selectedOption) => {
    setSelectedGlassesOption(selectedOption);
    setFieldValue(`serving`, selectedOption.value);
  };
  return (
    <>
      <ImageWrapper>
        <ImageInputWrapper>
          <ImageInput
            type="file"
            id="image"
            name="image"
            onChange={(e) => handleImageChange(e)}
            accept="image/*"
          />
          <ImageLabel htmlFor="image">
            <PlusSVG></PlusSVG>
          </ImageLabel>
        </ImageInputWrapper>
        <p>Add image</p>
        {selectedImage && <ImageDrink src={selectedImage} alt="Selected" />}
        {touched.image && errors.image ? (
          <FormError>{errors.image}</FormError>
        ) : null}
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
          name="category"
          options={categoryOptions}
          value={selectedCategoriesOption}
          onChange={(selectedCategoriesOption) =>
            handleSelectCategoriesChange(selectedCategoriesOption)
          }
          placeholder=""
        />
      </CategoryWrapper>
      {touched.category && errors.category ? (
        <FormError>{errors.category}</FormError>
      ) : null}

      <ServingWrapper>
        Glass
        <ServingLabel htmlFor="serving"></ServingLabel>
        <ServingSelect
          name="serving"
          options={glasseOptions}
          value={selectedGlassesOption}
          onChange={(selectedGlassesOption) =>
            handleSelectGlassesChange(selectedGlassesOption)
          }
          placeholder=""
        >
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
