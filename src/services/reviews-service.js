import axios from 'axios';

const REVIEWS_API = process.env.REACT_APP_BASE_API + '/reviews';

export const createOrUpdateReview = async (review) => {
  const response = await axios.post(REVIEWS_API, review);
  return response.data;
};

export const deleteReview = async (reviewId) => {
  const response = await axios.delete(`${REVIEWS_API}/${reviewId}`);
  return response.data;
};

export const getReviewsForUser = async (userId) => {
  const response = await axios.get(`${REVIEWS_API}/user/${userId}`);
  return response.data;
};

export const getReviewsForUserFollowings = async (userId) => {
  const response = await axios.get(`${REVIEWS_API}/followings/${userId}`);
  return response.data;
};

export const getReviewsForAlbum = async (albumId) => {
  const response = await axios.get(`${REVIEWS_API}/${albumId}`);
  return response.data;
};

export const getAllReviews = async () => {
  const response = await axios.get(`${REVIEWS_API}/`);
  return response.data;
};