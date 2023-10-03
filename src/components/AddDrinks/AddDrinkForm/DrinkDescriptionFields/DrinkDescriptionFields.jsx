import { useState, useEffect } from 'react';

import {
  getCategories,
  getGlasses,
} from '../../../../helpers/API/operationsFilters';

import {
  DescriptionWrapper,
  ImageWrapper,
  ImageDrink,
  ImageInputWrapper,
  ImageInput,
  ImageLabel,
  PlusSVG,
  NameInputWrapper,
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
    setFieldValue('drinkThumb', file);
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      setSelectedImage(null);
    }
  };

  const handleImageWrapperClick = () => {
    const imageInput = document.getElementById('drinkThumb');
    imageInput.click();
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setHasValue(value.trim().length >= 1);
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setHasValueDescription(value.trim().length >= 1);
  };

  const handleSelectCategoriesChange = (selectedOption) => {
    setSelectedCategoriesOption(selectedOption);
    setFieldValue(`category`, selectedOption.value);
  };

  const handleSelectGlassesChange = (selectedOption) => {
    setSelectedGlassesOption(selectedOption);
    setFieldValue(`glass`, selectedOption.value);
  };
  return (
    <DescriptionWrapper>
      <ImageWrapper onClick={handleImageWrapperClick}>
        <ImageInputWrapper>
          <ImageInput
            type="file"
            id="drinkThumb"
            name="drinkThumb"
            onChange={(e) => handleImageChange(e)}
            accept="drinkThumb/*"
          />
          <ImageLabel htmlFor="drinkThumb">
            <PlusSVG></PlusSVG>
          </ImageLabel>
        </ImageInputWrapper>
        <p>Add image</p>
        {selectedImage && <ImageDrink src={selectedImage} alt="Selected" />}
        {touched.drinkThumb && errors.drinkThumb ? (
          <FormError>{errors.drinkThumb}</FormError>
        ) : null}
      </ImageWrapper>

      <Wrapper>
        <NameInputWrapper>
          <NameLabel
            htmlFor="drink"
            $isFocused={$isFocused}
            $hasValue={$hasValue}
          >
            Enter item title
          </NameLabel>
          <NameInput
            type="text"
            id="drink"
            name="drink"
            onChange={(e) => {
              handleInputChange(e);
              handleChange(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              handleBlur(e);
            }}
            onFocus={() => setIsFocused(true)}
            value={values.drink}
            placeholder=" "
          />
          {touched.drink && errors.drink ? (
            <FormError>{errors.drink}</FormError>
          ) : null}
        </NameInputWrapper>

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
          <ServingLabel htmlFor="glass"></ServingLabel>
          <ServingSelect
            name="glass"
            options={glasseOptions}
            value={selectedGlassesOption}
            onChange={(selectedGlassesOption) =>
              handleSelectGlassesChange(selectedGlassesOption)
            }
            placeholder=""
          ></ServingSelect>
        </ServingWrapper>
        {touched.glass && errors.glass ? (
          <FormError>{errors.glass}</FormError>
        ) : null}

        <RadioWrapper>
          <RadioLabel
            className={values.alcoholic === 'Alcoholic' ? 'checked' : ''}
          >
            <RadioInput
              type="radio"
              name="alcoholic"
              value="Alcoholic"
              checked={values.alcoholic === 'Alcoholic'}
              onChange={handleChange}
            />
            <RadioSpan></RadioSpan>
            Alcoholic
          </RadioLabel>
          <RadioLabel
            className={values.alcoholic === 'Non alcoholic' ? 'checked' : ''}
          >
            <RadioInput
              type="radio"
              name="alcoholic"
              value="Non alcoholic"
              checked={values.alcoholic === 'Non alcoholic'}
              onChange={handleChange}
            />
            <RadioSpan></RadioSpan>
            Non-alcoholic
          </RadioLabel>
          {touched.alcoholic && errors.alcoholic ? (
            <FormError>{errors.alcoholic}</FormError>
          ) : null}
        </RadioWrapper>
      </Wrapper>
    </DescriptionWrapper>
  );
};

export default DrinkDescriptionFields;
