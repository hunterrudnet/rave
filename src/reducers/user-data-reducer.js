import {createSlice} from "@reduxjs/toolkit";
import {
  createOrUpdateUserThunk,
  getUserThunk
} from "../services/user-thunks";

const initialState = {
  loggedInUser: {},
  loading: true
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
      state.loggedInUser = {state, ...payload};
    }
  },
  reducers: {
    signOut(state) {
      state.loading = false;
      state.loggedInUser = {};
    }
  }
});

export const {signIn, signOut} = userSlice.actions;
export default userSlice.reducer;