import {createSlice} from "@reduxjs/toolkit";
import {createOrUpdateUserThunk} from "../services/user-thunks";

const initialState = {
  userData: {}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [createOrUpdateUserThunk.fulfilled]:
        (state, {payload}) => state.userData = {...payload}
  },
  reducers: {}
});

export default userSlice.reducer;