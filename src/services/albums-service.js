import axios from 'axios';

const ALBUMS_API = 'http://localhost:8080/albums';

// export const createAlbum = async (album) => {
//   const response = await axios.post(ALBUMS_API, album);
//   return response.data;
// };

export const getAlbumBySpotifyId = async (spotifyId) => {
  return await axios.get(`${ALBUMS_API}/${spotifyId}`);
};

export const getAlbumById = async (albumId) => {
  return await axios.get(`${ALBUMS_API}/lookup/${albumId}`);
};

export const getAlbumsBySearch = async (searchQuery) => {
  return await axios.get(`${ALBUMS_API}/search/${searchQuery}`);
};