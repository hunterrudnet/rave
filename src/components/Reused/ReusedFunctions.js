import {deleteReview} from "../../services/reviews-service";

export const getReviewHeaderDataShowAlbum = (review) => ({
  image: review.Album.image,
  alt: review.Album.name,
  link: `/details/${review.Album.spotifyId}`,
  topText: review.Album.name,
  bottomText: review.Album.artist
});

export const getReviewHeaderDataShowUser = (review) => ({
  image: review.User.image,
  alt: review.User.username,
  link: `/profile/${review.User.username}`,
  topText: review.User.username,
  bottomText: review.User.name
});

export const handleDeleteGeneral = async (id, reviewsData, setReviewsData) => {
  await deleteReview(id);
  let newReviews = reviewsData.filter((review) => review.id !== id);
  setReviewsData(newReviews);
};

export const objectEmpty = (obj) => !obj || Object.keys(obj).length === 0;