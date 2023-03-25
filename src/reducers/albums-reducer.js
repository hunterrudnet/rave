import {createSlice} from "@reduxjs/toolkit";
import {
  getAlbumByIdThunk, getAlbumBySpotifyIdThunk, getAlbumsBySearchThunk
} from "../services/albums-thunks";

const initialState = {
  albums: {}
};

const albumsSlice = createSlice({
  name: 'review', initialState, extraReducers: {
    [getAlbumByIdThunk.fulfilled]: (state,
        {payload}) => state.albums = {...payload, ...state.albums},
    [getAlbumBySpotifyIdThunk.fulfilled]: (state,
        {payload}) => state.albums = {...payload, ...state.albums},
    [getAlbumsBySearchThunk.fulfilled]: (state, {payload}) => {
      payload.forEach(
          album => state.albums = {...album, ...state.albums});
    }
  }, reducers: {}
});

export default albumsSlice.reducer;