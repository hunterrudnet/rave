import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./likes-service";

export const likeAlbumThunk = createAsyncThunk('likes/likeAlbum',
    async (userId, albumId) => {
      const response = await service.likeAlbum(userId, albumId);
      return response.data;
    });

export const getLikedAlbumsThunk = createAsyncThunk('likes/getLikedAlbums',
    async (userId) => {
      const response = await service.getLikedAlbums(userId);
      return response.data;
    });

