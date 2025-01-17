import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    const BASE_URL = "https://jsonplaceholder.typicode.com";
    const END_POINT = "/users";
    const url = BASE_URL + END_POINT;

    const params = {};
    const headers = {};

    try {
      const response = await axios.get(url, { params, headers });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
