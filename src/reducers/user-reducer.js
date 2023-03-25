import {createSlice} from "@reduxjs/toolkit";
import {createOrUpdateUserThunk} from "../services/user-thunks";

const initialState = {
  user: {}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [createOrUpdateUserThunk.fulfilled]:
        (state, {payload}) => state.user = {...payload}
  },
  reducers: {}
});

export default userSlice.reducer;