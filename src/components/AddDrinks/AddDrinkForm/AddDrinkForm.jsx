import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormButton } from './AddDrinkForm.styled';

import DrinkDescriptionFields from './DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from './DrinkIngredientsFields/DrinkIngredientsFields';
import RecipePreparation from './RecipePreparation/RecipePreparation';

const AddDrinkForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      ingredients: [{ name: '' }],
      preparationInstructions: '',
      category: '', // Додайте поле для категорії
      serving: '', // Додайте поле для сервування
      isAlcoholic: 'false', // Додайте поле для типу коктейлю
    },
    validationSchema: Yup.object({
      name: Yup.string().required('This field is mandatory'),
      description: Yup.string().required('This field is mandatory'),
      ingredients: Yup.array().of(
        Yup.object().shape({
          name: Yup.string().required('This field is mandatory'),
        }),
      ),
      preparationInstructions: Yup.string().required('This field is mandatory'),
      category: Yup.string().required('Select a cocktail category'),
      serving: Yup.string().required('Select the type of serving'),
      isAlcoholic: Yup.string().required('Select the type of cocktail'),
    }),
    onSubmit: async (values) => {
      console.log('values', values)
      // Обработка отправки формы...
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <DrinkDescriptionFields
        values={formik.values}
        errors={formik.errors}
        touched={formik.touched}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        setFieldValue={formik.setFieldValue} // Передаем setFieldValue в DrinkDescriptionFields
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
  );
};

export default AddDrinkForm;
