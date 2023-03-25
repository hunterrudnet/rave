import axios from 'axios';

const USERS_API = 'http://localhost:8080/users';

export const createOrUpdateUser = async (user) => {
  const response = await axios.post(`${USERS_API}/`, user);
  return response.data;
};

export const getUser = async (username) => {
  const response = await axios.get(`${USERS_API}/lookup`);
  return response.data;
};