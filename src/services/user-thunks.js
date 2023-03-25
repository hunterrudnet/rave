import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./user-service";

export const createUserThunk = createAsyncThunk('users/createUser',
    async (user) => await service.createUser(user));

export const getUserThunk = createAsyncThunk('users/getUser',
    async (username) => await service.getUser(username));

export const updateUserThunk = createAsyncThunk('users/updateUser',
    async (user) => await service.updateUser(user));