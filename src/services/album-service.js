import axios from 'axios';

const ALBUM_API = process.env.REACT_APP_BASE_API + '/albums';

export const getAlbumBySpotifyId = async (spotifyId) => {
  const response = await axios.get(`${ALBUM_API}/${spotifyId}`);
  return response.data;
};

export const getAverageReviewScoreByAlbumId = async (albumId) => {
  const response = await axios.get(`${ALBUM_API}/review/${albumId}`);
  return response.data;
};

export const getAlbumSearch = async (query) => {
  const response = await axios.get(`${ALBUM_API}/search/${query}`);
  return response.data;
};

export const getAllAlbums = async () => {
  const response = await axios.get(`${ALBUM_API}`);
  return response.data;
};