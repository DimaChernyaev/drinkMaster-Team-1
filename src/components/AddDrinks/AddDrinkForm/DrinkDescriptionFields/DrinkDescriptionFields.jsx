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
    setHasValueDescription(value.trim().length > 1);
  };

  return (
    <div>
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
        </NameInputWrapper>
        {touched.name && errors.name ? <div>{errors.name}</div> : null}
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
          value={values.description}
          onFocus={() => setIsFocusedDescription(true)}
          placeholder=" "
        />
        {touched.description && errors.description ? (
          <div>{errors.description}</div>
        ) : null}
      </RecipeWrapper>

      <div>
        <label htmlFor="category">Категорія коктейлю</label>
        <select
          id="category"
          name="category"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.category}
        >
          {/* Опції для вибору категорії коктейлю */}
        </select>
        {touched.category && errors.category ? (
          <div>{errors.category}</div>
        ) : null}
      </div>
      <div>
        <label>Сервування</label>
        <select
          id="serving"
          name="serving"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.serving}
        >
          {/* Опції для вибору типу сервування */}
        </select>
        {touched.serving && errors.serving ? <div>{errors.serving}</div> : null}
      </div>
      <div>
        <label>Тип коктейлю</label>
        <div>
          <label>
            <input
              type="radio"
              name="isAlcoholic"
              value="true"
              checked={values.isAlcoholic === 'true'}
              onChange={handleChange}
            />{' '}
            Алкогольний
          </label>
          <label>
            <input
              type="radio"
              name="isAlcoholic"
              value="false"
              checked={values.isAlcoholic === 'false'}
              onChange={handleChange}
            />{' '}
            Безалкогольний
          </label>
        </div>
        {touched.isAlcoholic && errors.isAlcoholic ? (
          <div>{errors.isAlcoholic}</div>
        ) : null}
      </div>
    </div>
  );
};

export default DrinkDescriptionFields;

// import {
//   ImageWrapper,
//   ImageInputWrapper,
//   ImageInput,
//   ImageLabel,
//   NameInputWrapper,
//   NameWrapper,
//   NameLabel,
//   NameInput,
// } from './DrinkDescriptionFields.styled';
// // Компонент для полів опису коктейлю
// const DrinkDescriptionFields = ({
//   values,
//   errors,
//   touched,
//   handleChange,
//   handleBlur,
//   setFieldValue,
// }) => {
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFieldValue('image', file);
//   };

//   return (
//     <div>
//       <ImageWrapper>
//         <ImageInputWrapper>
//           <ImageInput
//             type="file"
//             id="image"
//             name="image"
//             onChange={handleImageChange}
//             accept="image/*"
//           />
//           <ImageLabel htmlFor="image">
//             {' '}
//             <span>+</span>Add image
//           </ImageLabel>
//         </ImageInputWrapper>
//         {touched.image && errors.image ? <div>{errors.image}</div> : null}
//       </ImageWrapper>

//       <NameWrapper>
//         <NameInputWrapper>
//           <NameLabel htmlFor="name">Enter item title</NameLabel>
//           <NameInput
//             type="text"
//             id="name"
//             name="name"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.name}
//             placeholder=" "
//           />
//         </NameInputWrapper>
//         {touched.name && errors.name ? <div>{errors.name}</div> : null}
//       </NameWrapper>

//       <div>
//         <label htmlFor="description">Опис коктейлю</label>
//         <textarea
//           id="description"
//           name="description"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.description}
//         />
//         {touched.description && errors.description ? (
//           <div>{errors.description}</div>
//         ) : null}
//       </div>
//       <div>
//         <label htmlFor="category">Категорія коктейлю</label>
//         <select
//           id="category"
//           name="category"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.category}
//         >
//           {/* Опції для вибору категорії коктейлю */}
//         </select>
//         {touched.category && errors.category ? (
//           <div>{errors.category}</div>
//         ) : null}
//       </div>
//       <div>
//         <label>Сервування</label>
//         <select
//           id="serving"
//           name="serving"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.serving}
//         >
//           {/* Опції для вибору типу сервування */}
//         </select>
//         {touched.serving && errors.serving ? <div>{errors.serving}</div> : null}
//       </div>
//       <div>
//         <label>Тип коктейлю</label>
//         <div>
//           <label>
//             <input
//               type="radio"
//               name="isAlcoholic"
//               value="true"
//               checked={values.isAlcoholic === 'true'}
//               onChange={handleChange}
//             />{' '}
//             Алкогольний
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="isAlcoholic"
//               value="false"
//               checked={values.isAlcoholic === 'false'}
//               onChange={handleChange}
//             />{' '}
//             Безалкогольний
//           </label>
//         </div>
//         {touched.isAlcoholic && errors.isAlcoholic ? (
//           <div>{errors.isAlcoholic}</div>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default DrinkDescriptionFields;
