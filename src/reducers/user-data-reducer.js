import {createSlice} from "@reduxjs/toolkit";
import {
  createOrUpdateUserThunk,
  getUserThunk
} from "../services/user-data-thunks";

const initialState = {
  loggedInUser: {}
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: {
    [createOrUpdateUserThunk.fulfilled]: (state, {payload}) => {
      state.loggedInUser = {...payload};
    },
    [getUserThunk.fulfilled]: (state, {payload}) => {
      state.loggedInUser = {state, ...payload};
    }
  },
  reducers: {
    signIn(state, {payload}) {
      state.loggedInUser = {...payload};
    },
    signOut(state) {
      state.loggedInUser = {};
    }
  }
});

export const {signIn, signOut} = userSlice.actions;
export default userSlice.reducer;