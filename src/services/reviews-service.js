import axios from 'axios';

const REVIEWS_API = 'http://localhost:8080/reviews';

export const createReview = async (review) => {
  const response = await axios.post(REVIEWS_API, review);
  return response.data;
};

export const getReviewsForUser = async (userId) => {
  const response = await axios.get(`${REVIEWS_API}/user/${userId}`);
  return response.data;
};

export const getReviewsForAlbum = async (albumId) => {
  const response = await axios.get(`${REVIEWS_API}/${albumId}`);
  return response.data;
};

// export const updateReview = async (review) => {
//   const response = await axios.put(`${REVIEWS_API}/${review._id}`, review);
//   return;
// };