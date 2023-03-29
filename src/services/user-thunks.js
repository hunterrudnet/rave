import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./user-service";

export const createOrUpdateUserThunk = createAsyncThunk(
    'user/createOrUpdateUser',
    async (user) => {
      return await service.createOrUpdateUser(user);
    });

export const getUserThunk = createAsyncThunk('user/getUser',
    async (username) => {
      return await service.getUser(username);
    });

export const makeUserModeratorThunk = createAsyncThunk('user/makeUserMod',
    async ({userId, role}) => {
      return await service.makeUserModerator(userId, role);
    });

export const makeUserNotModeratorThunk = createAsyncThunk('user/makeUserNotMod',
    async (userId) => {
      return await service.makeUserNotModerator(userId);
    });