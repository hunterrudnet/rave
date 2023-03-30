import axios from 'axios';

const TRACKS_API = process.env.REACT_APP_BASE_API + '/tracks';

export const createTrack = async (track) => {
    const response = await axios.post(TRACKS_API, track);
    return response.data;
};

export const getTrackBySpotfiyId = async (spotifyId) => {
    const response = await axios.get(`${TRACKS_API}/${spotifyId}`);
    return response.data;
};