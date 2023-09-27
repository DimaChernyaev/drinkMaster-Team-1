import axios from 'axios';

axios.defaults.baseURL = 'https://drink-master-server.onrender.com';

// отримання конкретного коктеля по id для сторінки Дрінк
export async function getCurrentCoctail(id) {
  try {
    console.log('axios', axios);

    const { data } = await axios.get(`/drinks/${id}`);
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// отримання коктелів за категорією для домашньої сторінки
export async function getCoctailsByCategories() {
  try {
    console.log('axios.', axios.defaults);
    const res = await axios.get('/drinks/mainpage');
    // console.log('res', res);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}

// отримання популярних коктелів
export async function getPopularCoctails() {
  try {
    const { data } = await axios.get(`/drinks/popular`);

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
}

// отримання коктелів по фільтру
export async function getCoctailsByFilter({
  category ,
  ingredient,
  keyword,
  page = '1',
  per_page = '10',
}) {
  let paramsObj = {};
  if (category) paramsObj = {category,};
  if (ingredient) paramsObj = {...paramsObj, ingredient};
  if (keyword) paramsObj = {...paramsObj, keyword};
  paramsObj = {...paramsObj, page, per_page};
  console.log("paramsObj =",paramsObj);
  const searchParams = new URLSearchParams(paramsObj);

  try {
    const { data } = await axios.get('/drinks/search', searchParams);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}
