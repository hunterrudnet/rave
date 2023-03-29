import axios from 'axios';

const USERS_API = process.env.REACT_APP_BASE_API + '/users';

export const createOrUpdateUser = async (user) => {
  const response = await axios.post(`${USERS_API}/`, user);
  return response.data;
};

export const getUser = async (username) => {
  const response = await axios.get(`${USERS_API}/lookup/${username}`);
  return response.data;
};

export const makeUserModerator = async (userId, role) => {
  const response = await axios.post(`${USERS_API}/moderator`,
      {userId: userId, role: role});
  return response.data;
};

export const makeUserNotModerator = async (userId) => {
  const response = await axios.delete(`${USERS_API}/moderator/${userId}`);
  return response.data;
};