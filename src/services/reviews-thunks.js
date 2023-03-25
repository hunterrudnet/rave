import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./reviews-service";

export const createReviewThunk = createAsyncThunk('reviews/createReview',
    async (review) => await service.createReview(review));

export const getReviewsForUserThunk = createAsyncThunk(
    'reviews/getReviewsForUserThunk',
    async (userId) => await service.getReviewsForUser(userId));

export const getReviewsForAlbumThunk = createAsyncThunk(
    'reviews/getReviewsForAlbumThunk',
    async (albumId) => await service.getReviewsForAlbum(albumId));

// export const updateReviewThunk = createAsyncThunk('reviews/updateReview',
//     async (review) => await service.updateReview(review));