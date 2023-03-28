import axios from "axios";

const LIKES_API = "http://localhost:8080/likes";

export const likeAlbum = async ({userId, albumId}) => {
  const response = await axios.post(LIKES_API, {userId, albumId});
  return response.data;
};

export const getLikedAlbums = async (userId) => {
  const response = await axios.get(`${LIKES_API}/liked-albums/${userId}`);
  return response.data;
};