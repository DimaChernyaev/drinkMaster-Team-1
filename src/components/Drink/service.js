import axios from 'axios';

axios.defaults.baseURL = 'https://drink-master-server.onrender.com';

export const getCoctailById = async (drinkId) => {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGM0ZTE3NDk3YWU1NzQ1ZjE2Y2FjOCIsImlhdCI6MTY5NTQ2MTc0NiwiZXhwIjoxNjk1NTQ0NTQ2fQ.RVHnsYgcK11oOJdJKd-i15H0deHEQQarVbMpZPhuoOM';
    const response = await axios.get(`/drinks/${drinkId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return error.message;
  }
};
