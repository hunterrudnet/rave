import {createSlice} from "@reduxjs/toolkit";
import {
  createOrUpdateUserThunk,
  getUserThunk
} from "../services/user-data-thunks";

const initialState = {
  loggedInUser: {},
  loading: true
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
    setLoading(state, {payload}) {
      state.loading = payload;
    },
    signIn(state, {payload}) {
      state.loading = false;
      state.loggedInUser = {...payload};
    },
    signOut(state) {
      state.loading = true;
      state.loggedInUser = {};
    }
  }
});

export const {signIn, signOut, setLoading} = userSlice.actions;
export default userSlice.reducer;