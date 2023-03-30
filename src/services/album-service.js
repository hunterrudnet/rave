import axios from 'axios';

const ALBUM_API = process.env.REACT_APP_BASE_API + '/albums';

export const getAlbumSearch = async (query) => {
  const response = await axios.get(`${ALBUM_API}/search/${query}`);
  return response.data;
};