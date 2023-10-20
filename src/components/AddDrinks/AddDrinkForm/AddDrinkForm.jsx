import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { FormButton } from './AddDrinkForm.styled';
import { addOwn } from '../../../redux/drinks/own/ownOperations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import DrinkDescriptionFields from './DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from './DrinkIngredientsFields/DrinkIngredientsFields';
import RecipePreparation from './RecipePreparation/RecipePreparation';
import Loader from '../../Loader/Loader';

const AddDrinkForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      drink: '',
      ingredients: [{ title: '' }],
      instructions: '',
      category: '',
      glass: '',
      alcoholic: 'Non alcoholic',
    },
    validationSchema: Yup.object().shape({
      drink: Yup.string().required('This field is mandatory'),
      description: Yup.string().required('This field is mandatory'),
      ingredients: Yup.array().required('This field is mandatory'),
      instructions: Yup.string().required('This field is mandatory'),
      category: Yup.string().required('This field is mandatory'),
      glass: Yup.string().required('This field is mandatory'),
      alcoholic: Yup.string().required('Select the type of cocktail'),
      drinkThumb: Yup.mixed().required('Select a drinkThumb'),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();

      formData.append('drink', values.drink);
      formData.append('category', values.category);
      formData.append('description', values.description);
      formData.append('alcoholic', values.alcoholic);
      formData.append('instructions', values.instructions);
      formData.append('glass', values.glass);

      formData.append('drinkThumb', values.drinkThumb);

      const ingredientsStr = JSON.stringify(values.ingredients);
      formData.append('ingredients', ingredientsStr);
      try {
        setIsLoading(true);
        const response = await dispatch(addOwn(formData));
        setIsLoading(false);
        if (response) {
          navigate('/my');
        } else {
          console.log('Ошибка на сервере:', response.statusText);
        }
      } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
      }
    },
  });

  return (
    <>
      {isLoading ? (
        <Loader text={'Please wait, we add your coctail...'} />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <DrinkDescriptionFields
            values={formik.values}
            errors={formik.errors}
            touched={formik.touched}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            setFieldValue={formik.setFieldValue}
          />
          <DrinkIngredientsFields
            values={formik.values}
            errors={formik.errors}
            touched={formik.touched}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            setFieldValue={formik.setFieldValue}
          />
          <RecipePreparation
            values={formik.values}
            errors={formik.errors}
            touched={formik.touched}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          <FormButton type="submit">Add</FormButton>
        </form>
      )}
    </>
  );
};

export default AddDrinkForm;
