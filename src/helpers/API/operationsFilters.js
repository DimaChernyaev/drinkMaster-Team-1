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
export async function getIngridients() {
  try {
    const { data } = await axios.get(`/filters/ingridients`);

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
