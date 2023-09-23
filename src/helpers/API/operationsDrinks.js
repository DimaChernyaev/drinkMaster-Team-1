import axios from 'axios';

export async function getCurrentCoctail(id) {
  try {
    console.log(id);

    const { data } = await axios.get(`/drinks/${id}`);
    console.log(data);

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getCoctailsByCategories() {
  try {
    const { data } = await axios.get(`/drinks/mainpage`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getPopularCoctails() {
  try {
    const { data } = await axios.get(`/drinks/popular`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getCoctailsByFilter({ category, ingredient }) {
  try {
    const { data } = await axios.get(
      `/drinks/search?category=${category}&ingredient=${ingredient}`,
    );

    return data;
  } catch (error) {
    console.log(error.message);
  }
}
