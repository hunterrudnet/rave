import {createSlice} from "@reduxjs/toolkit";
import {
  createOrUpdateUserThunk,
  getUserThunk,
  makeUserModeratorThunk,
  makeUserNotModeratorThunk
} from "../services/user-thunks";

const initialState = {
  loggedInUser: {},
  loading: false
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: {
    [createOrUpdateUserThunk.pending]: (state) => {
      state.loading = true;
    },
    [createOrUpdateUserThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.loggedInUser = {...payload};
    },
    [getUserThunk.pending]: (state) => {
      state.loading = true;
    },
    [getUserThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.loggedInUser = {...state.loggedInUser, ...payload};
    },
    [makeUserModeratorThunk.pending]: (state) => {
      state.loading = true;
    },
    [makeUserModeratorThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.loggedInUser = {...state.loggedInUser, ...payload};
    },
    [makeUserNotModeratorThunk.pending]: (state) => {
      state.loading = true;
    },
    [makeUserNotModeratorThunk.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.loggedInUser = {...state.loggedInUser, ...payload};
    }
  },
  reducers: {
    signOut(state) {
      state.loading = false;
      state.loggedInUser = {};
    }
  }
});

export const {signOut} = userSlice.actions;
export default userSlice.reducer;