import axios from 'axios';

// отримання списку категорій
export async function getCategories() {
  try {
    const { data } = await axios.get(`/filters/categories`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// отримання списку інгрідієнтів
export async function getIngredients() {
  try {
    const { data } = await axios.get(`/filters/ingredients`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// отримання списку бокалів
export async function getGlasses() {
  try {
    const { data } = await axios.get(`/filters/glasses`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// отримання інгредієнтів по id
export async function getIngredientById(arr) {
  try {
    const arrayOfPromises = arr.map(async (id) => {
      const response = await axios.get(`/ingredients/${id}`);
      return response;
    });

    return await Promise.all(arrayOfPromises);
  } catch (error) {
    console.log(error.message);
  }
}
