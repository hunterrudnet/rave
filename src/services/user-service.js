import axios from 'axios';

const USERS_API = 'http://localhost:8080/users';

export const createOrUpdateUser = async (user) => {
  return await axios.post(`${USERS_API}/`, user);
};

export const getUser = async (username) => {
  return await axios.get(`${USERS_API}/lookup/${username}`);
};