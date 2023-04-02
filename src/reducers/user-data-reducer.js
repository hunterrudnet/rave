import {createSlice} from "@reduxjs/toolkit";
import {
  createOrUpdateUserThunk,
  getUserThunk,
  makeUserModeratorThunk,
  makeUserNotModeratorThunk
} from "../services/user-thunks";

const initialState = {
  loggedInUser: {},
  loggedInUserLoading: true,
  loggedIn: false
};

const updateProfilePicture = (loggedInUser) => {
  if (!loggedInUser.image) {
    loggedInUser.image = "/images/rave-logo.jpg";
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: {
    [createOrUpdateUserThunk.pending]: (state) => {
      state.loggedInUserLoading = true;
      state.loggingIn = true;
    },
    [createOrUpdateUserThunk.fulfilled]: (state, {payload}) => {
      state.loggedIn = true;
      state.loggedInUser = {...payload};
      updateProfilePicture(state.loggedInUser);
      state.loggedInUserLoading = false;
    },
    [getUserThunk.pending]: (state) => {
      state.loggedInUserLoading = true;
    },
    [getUserThunk.fulfilled]: (state, {payload}) => {
      state.loggedIn = true;
      state.loggedInUser = {...state.loggedInUser, ...payload};
      updateProfilePicture(state.loggedInUser);
      state.loggedInUserLoading = false;
    },
    [makeUserModeratorThunk.pending]: (state) => {
      state.loggedInUserLoading = true;
    },
    [makeUserModeratorThunk.fulfilled]: (state, {payload}) => {
      state.loggedIn = true;
      state.loggedInUser = {...state.loggedInUser, ...payload};
      updateProfilePicture(state.loggedInUser);
      state.loggedInUserLoading = false;
    },
    [makeUserNotModeratorThunk.pending]: (state) => {
      state.loggedInUserLoading = true;
    },
    [makeUserNotModeratorThunk.fulfilled]: (state, {payload}) => {
      state.loggedIn = true;
      state.loggedInUser = {...state.loggedInUser, ...payload};
      updateProfilePicture(state.loggedInUser);
      state.loggedInUserLoading = false;
    }
  },
  reducers: {
    stopLoading(state) {
      state.loggedInUserLoading = false;
    },
    signOut(state) {
      state.loggedIn = false;
      state.loggedInUser = {};
      state.loggedInUserLoading = false;
    }
  }
});

export const {stopLoading, signOut} = userSlice.actions;
export default userSlice.reducer;