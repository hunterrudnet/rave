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

export const followUser = async (followerUserId, followingUserId) => {
  const body = {"follower_id": followerUserId, "following_id": followingUserId};
  const response = await axios.post(`${FOLLOWING_API}/`, body);
  return response.data;
};

export const unfollowUser = async (followerUserId, unfollowingUserId) => {
  const body = {
    "follower_id": followerUserId,
    "following_id": unfollowingUserId
  };
  const response = await axios.delete(`${FOLLOWING_API}/`, body);
  return response.data;
};