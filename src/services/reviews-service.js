import axios from 'axios';

const REVIEWS_API = 'http://localhost:8080/reviews';

export const createReview = async (review) => {
  return await axios.post(REVIEWS_API, review);
};

export const getReviewsForUser = async (userId) => {
  return await axios.get(`${REVIEWS_API}/user/${userId}`);
};

export const getReviewsForAlbum = async (albumId) => {
  return await axios.get(`${REVIEWS_API}/${albumId}`);
};

export const getAllReviews = async () => {
  return await axios.get(`${REVIEWS_API}/`);
};

// export const updateReview = async (review) => {
//   const response = await axios.put(`${REVIEWS_API}/${review._id}`, review);
//   return;
// };