import axios from 'axios';

const ALBUMS_API = 'http://localhost:4000/albums';

// export const createAlbum = async (album) => {
//   const response = await axios.post(ALBUMS_API, album);
//   return response.data;
// };

export const getAlbumById = async (albumId) => {
  const response = await axios.get(`${ALBUMS_API}/${albumId}`);
  return response.data;
};

export const getAlbumsBySearch = async (searchQuery) => {
  const response = await axios.get(`${ALBUMS_API}/search/${searchQuery}`);
  return response.data;
};