import axios from 'axios';

// отримання конкретного коктеля по id для сторінки Дрінк
export async function getCurrentCoctail(id) {
  try {
    console.log('axios', axios);

    const { data } = await axios.get(`/drinks/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// отримання коктелів за категорією для домашньої сторінки
export async function getCoctailsByCategories() {
  try {
    const { data } = await axios.get('/drinks/mainpage');
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// отримання популярних коктелів
export async function getPopularCoctails() {
  try {
    const { data } = await axios.get(`/drinks/popular`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// отримання коктелів по фільтру
export async function getCoctailsByFilter(
  inputKeyword,
  category,
  ingredient,
  page,
  per_page,
) {
  let url = '/drinks/search?';
  if (inputKeyword) url = url + 'keyword=' + inputKeyword + '&';
  if (category) url = url + 'category=' + category + '&';
  if (ingredient) url = url + 'ingredient=' + ingredient + '&';
  if (page) url = url + 'page=' + page + '&';
  if (per_page) url = url + 'per_page=' + per_page;

  //console.log(url);

  try {
    axios.defaults.params;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}
