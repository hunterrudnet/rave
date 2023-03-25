import axios from 'axios';

const ALBUMS_API = 'http://localhost:4000/albums';

// export const createAlbum = async (album) => {
//   const response = await axios.post(ALBUMS_API, album);
//   return response.data;
// };

export const getAlbumBySpotifyId = async (spotifyId) => {
  const response = await axios.get(`${ALBUMS_API}/${spotifyId}`);
  return response.data;
};

export const getAlbumById = async (albumId) => {
  const response = await axios.get(`${ALBUMS_API}/lookup/${albumId}`);
  return response.data;
};

export const getAlbumsBySearch = async (searchQuery) => {
  const response = await axios.get(`${ALBUMS_API}/search/${searchQuery}`);
  return response.data;
};