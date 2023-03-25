import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./albums-service";

export const getAlbumByIdThunk = createAsyncThunk('albums/getAlbumByIdThunk',
    async (albumId) => {
      const response = await service.getAlbumById(albumId);
      return response.data;
    });

export const getAlbumsBySearchThunk = createAsyncThunk(
    'albums/getAlbumBySearchThunk',
    async (query) => {
      const response = await service.getAlbumsBySearch(query);
      return response.data;
    });

export const getAlbumBySpotifyIdThunk = createAsyncThunk(
    'albums/getAlbumBySpotifyIdThunk',
    async (spotifyId) => {
      const response = await service.getAlbumBySpotifyId(spotifyId);
      return response.data;
    });