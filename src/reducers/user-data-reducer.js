import {createSlice} from "@reduxjs/toolkit";
import {
  createOrUpdateUserThunk,
  getUserThunk,
  makeUserModeratorThunk,
  makeUserNotModeratorThunk
} from "../services/user-thunks";

const initialState = {
  loggedInUser: {},
  loading: true,
  loggedIn: false
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: {
    [createOrUpdateUserThunk.pending]: (state) => {
      state.loading = true;
      state.loggingIn = true;
    },
    [createOrUpdateUserThunk.fulfilled]: (state, {payload}) => {
      state.loggedIn = true;
      state.loggedInUser = {...payload};
      state.loading = false;
    },
    [getUserThunk.pending]: (state) => {
      state.loading = true;
    },
    [getUserThunk.fulfilled]: (state, {payload}) => {
      state.loggedIn = true;
      state.loggedInUser = {...state.loggedInUser, ...payload};
      state.loading = false;
    },
    [makeUserModeratorThunk.pending]: (state) => {
      state.loading = true;
    },
    [makeUserModeratorThunk.fulfilled]: (state, {payload}) => {
      state.loggedIn = true;
      state.loggedInUser = {...state.loggedInUser, ...payload};
      state.loading = false;
    },
    [makeUserNotModeratorThunk.pending]: (state) => {
      state.loading = true;
    },
    [makeUserNotModeratorThunk.fulfilled]: (state, {payload}) => {
      state.loggedIn = true;
      state.loggedInUser = {...state.loggedInUser, ...payload};
      state.loading = false;
    }
  },
  reducers: {
    stopLoading(state) {
      state.loading = false;
    },
    signOut(state) {
      state.loggedIn = false;
      state.loggedInUser = {};
      state.loading = false;
    }
  }
});

export const {stopLoading, signOut} = userSlice.actions;
export default userSlice.reducer;