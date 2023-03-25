import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./albums-service";

export const getAlbumByIdThunk = createAsyncThunk('albums/getAlbumByIdThunk',
    async (albumId) => await service.getAlbumById(albumId));

export const getAlbumsBySearchThunk = createAsyncThunk(
    'albums/getAlbumBySearchThunk',
    async (query) => await service.getAlbumsBySearch(query));