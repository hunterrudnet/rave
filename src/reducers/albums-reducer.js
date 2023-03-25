import {createSlice} from "@reduxjs/toolkit";
import {
  getAlbumByIdThunk, getAlbumBySpotifyIdThunk, getAlbumsBySearchThunk
} from "../services/albums-thunks";

const initialState = {
  albumsData: {}
};

const albumsSlice = createSlice({
  name: 'review', initialState, extraReducers: {
    [getAlbumByIdThunk.fulfilled]: (state,
        {payload}) => state.albumsData = {...payload, ...state.albumsData},
    [getAlbumBySpotifyIdThunk.fulfilled]: (state,
        {payload}) => state.albumsData = {...payload, ...state.albumsData},
    [getAlbumsBySearchThunk.fulfilled]: (state, {payload}) => {
      payload.forEach(
          album => state.albumsData = {...album, ...state.albumsData});
    }
  }, reducers: {}
});

export default albumsSlice.reducer;