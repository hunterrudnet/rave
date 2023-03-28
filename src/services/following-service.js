import axios from 'axios';

const FOLLOWING_API = 'http://localhost:8080/user-follows';

export const getWhoFollowsUser = async (userId) => {
  const response = await axios.get(`${FOLLOWING_API}/follower/${userId}`);
  return response.data;
};

export const getWhoUserFollows = async (userId) => {
  const response = await axios.get(`${FOLLOWING_API}/following/${userId}`);
  return response.data;
};