import { useFormik } from 'formik';
// import { useNavigate } from 'react-router-dom';
// import * as Yup from 'yup';
import { FormButton } from './AddDrinkForm.styled';
import { addOwn } from '../../../redux/drinks/own/ownOperations';
import { useDispatch } from 'react-redux';

import DrinkDescriptionFields from './DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from './DrinkIngredientsFields/DrinkIngredientsFields';
import RecipePreparation from './RecipePreparation/RecipePreparation';

const AddDrinkForm = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      drink: '',
      ingredients: [{ title: '' }],
      instructions: '',
      category: '', // Додайте поле для категорії
      glass: '', // Додайте поле для сервування
      alcoholic: 'Non alcoholic', // Додайте поле для типу коктейлю
    },
    // validationSchema: Yup.object({
    //   drink: Yup.string().required('This field is mandatory'),
    //   description: Yup.string().required('This field is mandatory'),
    //   ingredients: Yup.array().of(
    //     Yup.object().shape({
    //       drink: Yup.string().required('This field is mandatory'),
    //     }),
    //   ),
    //   instructions: Yup.string().required('This field is mandatory'),
    //   category: Yup.string().required('This field is mandatory'),
    //   glass: Yup.string().required('This field is mandatory'),
    //   alcoholic: Yup.boolean().required('Select the type of cocktail'),
    //   drinkThumb: Yup.mixed().required('Select an drinkThumb'),
    // }),
    onSubmit: async (values) => {
      console.log('values', values);
      const formData = new FormData();

      // Добавляем значения в FormData
      formData.append('drink', values.drink);
      formData.append('category', values.category);
      formData.append('description', values.description);
      formData.append('alcoholic', values.alcoholic);
      formData.append('instructions', values.instructions);
      formData.append('glass', values.glass);

      // Добавляем изображение
      formData.append('drinkThumb', values.drinkThumb);

      // Добавляем ингредиенты (предполагая, что ingredients - это массив объектов)
      values.ingredients.forEach((ingredient, index) => {
        formData.append(`ingredients[${index}].drink`, ingredient.drink);
        formData.append(`ingredients[${index}].measure`, ingredient.measure);
        // Добавьте другие свойства ингредиентов по необходимости
      });

      try {
        // Отправка данных на сервер с использованием fetch
        const response = await dispatch(addOwn(formData));

        if (response.ok) {
          // Если запрос успешный, перенаправляем пользователя на MyDrinksPage
          // navigate('/my'); // Используйте navigate для перенаправления
        } else {
          // Если есть ошибка с сервера, обрабатываем ее
          console.log('Ошибка на сервере:', response.statusText);
          // Вы можете установить ошибку в state для отображения сообщения об ошибке
        }
      } catch (error) {
        // Обработка ошибки, если запрос не удалось отправить
        console.error('Ошибка при отправке запроса:', error);
        // Вы можете установить ошибку в state для отображения сообщения об ошибке
      }
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
