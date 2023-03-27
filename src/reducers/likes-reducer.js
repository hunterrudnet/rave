import {createSlice} from "@reduxjs/toolkit";
import {likeAlbumThunk, getLikedAlbumsThunk} from "../services/likes-thunks";

const initialState = {
  likedAlbums: {},
  loading: true
};

const likesSlice = createSlice({
  name: 'review', initialState, extraReducers: {
    [likeAlbumThunk.fulfilled]: (state, {payload}) => {
      const userId = payload.userId;
      const albumId = payload.albumId;
      if (state.likedAlbums[userId] === undefined) {
        state.likedAlbums[userId] = [albumId];
      } else {
        let indexOfAlbum = state.likedAlbums[userId].findIndex(
            x => x === albumId);
        if (indexOfAlbum === -1) {
          state.likedAlbums[userId].push(albumId);
        }
      }
    },
    [getLikedAlbumsThunk.pending]: (state) => {
      state.loading = false;
    },
    [getLikedAlbumsThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.likedAlbums = {...state.likedAlbums, ...payload};
    }
  }, reducers: {}
});

export default likesSlice.reducer;