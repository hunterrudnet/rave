import {createSlice} from "@reduxjs/toolkit";
import {
  createReviewThunk,
  getReviewsForUserThunk,
  getReviewsForAlbumThunk
} from "../services/reviews-thunks";

const initialState = {
  reviewsData: {}
};

const reviewsSlice = createSlice({
  name: 'review',
  initialState,
  extraReducers: {
    [createReviewThunk.fulfilled]: (state,
        {payload}) => state.reviewsData = {...payload, ...state.reviewsData},
    [getReviewsForUserThunk.fulfilled]: (state,
        {payload}) => state.reviewsData = {...payload, ...state.reviewsData},
    [getReviewsForAlbumThunk.fulfilled]: (state,
        {payload}) => state.reviewsData = {...payload, ...state.reviewsData}
  },
  reducers: {}
});

export default reviewsSlice.reducer;