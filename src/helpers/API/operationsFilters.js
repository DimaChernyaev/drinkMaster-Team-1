import axios from 'axios';
import { selectToken } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const token = useSelector(selectToken);

axios.defaults.baseURL = 'https://drink-master-server.onrender.com';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export async function getCategories() {
  try {
    const { data } = await axios.get(`/fiters/categories`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getIngridients() {
  try {
    const { data } = await axios.get(`/fiters/ingridients`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getGlasses() {
  try {
    const { data } = await axios.get(`/fiters/glasses`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
}
