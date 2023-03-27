import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./user-service";

export const createOrUpdateUserThunk = createAsyncThunk(
    'users/createOrUpdateUser',
    async (user) => {
      const response = await service.createOrUpdateUser(user);
      return response.data;
    });

export const getUserThunk = createAsyncThunk('users/getUser',
    async (username) => {
      const response = await service.getUser(username);
      return response.data;
    });

