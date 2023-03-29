import axios from 'axios';

const FOLLOWING_API = process.env.REACT_APP_BASE_API + '/user-follows';

export const getWhoFollowsUser = async (userId) => {
  const response = await axios.get(`${FOLLOWING_API}/follower/${userId}`);
  return response.data;
};

export const getWhoUserFollows = async (userId) => {
  const response = await axios.get(`${FOLLOWING_API}/following/${userId}`);
  return response.data;
};