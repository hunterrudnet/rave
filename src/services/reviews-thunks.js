import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./reviews-service";

export const createReviewThunk = createAsyncThunk('reviews/createReview',
    async (review) => {
      const response = await service.createReview(review);
      return response.data;
    });

export const getReviewsForUserThunk = createAsyncThunk(
    'reviews/getReviewsForUser',
    async (userId) => {
      const response = await service.getReviewsForUser(userId);
      return response.data;
    });

export const getReviewsForAlbumThunk = createAsyncThunk(
    'reviews/getReviewsForAlbum',
    async (albumId) => {
      const response = await service.getReviewsForAlbum(albumId);
      return response.data;
    });

export const getAllReviewsThunk = createAsyncThunk('reviews/getAllReviews',
    async () => {
      const response = await service.getAllReviews();
      return response.data;
    });