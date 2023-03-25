import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./reviews-service";

export const createReviewThunk = createAsyncThunk('reviews/createReview',
    async (review) => {
      const response = await service.createReview(review);
      return response.data;
    });

export const getReviewsForUserThunk = createAsyncThunk(
    'reviews/getReviewsForUserThunk',
    async (userId) => {
      const response = await service.getReviewsForUser(userId);
      return response.data;
    });

export const getReviewsForAlbumThunk = createAsyncThunk(
    'reviews/getReviewsForAlbumThunk',
    async (albumId) => {
      const response = await service.getReviewsForAlbum(albumId);
      return response.data;
    });