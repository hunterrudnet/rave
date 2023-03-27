import axios from "axios";

const LIKES_API = "http://localhost:8080/likes";

export const likeAlbum = async (userId, albumId) => {
  return await axios.post(LIKES_API, {userId, albumId});
};

export const getLikedAlbums = async (userId) => {
  return await axios.get(`${LIKES_API}/liked-albums/${userId}`);
};