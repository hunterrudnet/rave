import axios from 'axios';

const USERS_API = 'http://localhost:4000/users';

export const createUser = async (user) => {
  const response = await axios.post(USERS_API, user);
  return response.data;
};

export const getUser = async (username) => {
  const response = await axios.get(`${USERS_API}/lookup`);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await axios.put(`${TUITS_API}/${tuit._id}`, user);
  return reponse.data;
};