import {createSlice} from "@reduxjs/toolkit";
import {
  createReviewThunk,
  getReviewsForUserThunk,
  getReviewsForAlbumThunk
} from "../services/reviews-thunks";

const initialState = {
  reviews: {}
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: {
    [createReviewThunk.fulfilled]: (state, {payload}) => {
      state.reviews = {...payload, ...state.reviews};
    },
    [getReviewsForUserThunk.fulfilled]: (state, {payload}) => {
      state.reviews = {...payload, ...state.reviews};
    },
    [getReviewsForAlbumThunk.fulfilled]: (state, {payload}) => {
      state.reviews = {...payload, ...state.reviews};
    }
  },
  reducers: {}
});

export default reviewsSlice.reducer;