import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  error: null,
  status: "idle",
};

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (token) => {
    try {
      const response = await axios.get("http://localhost:3003/post", {
        headers: {
          Authorization: token,
        },
      });

      return response.data.posts;
    } catch (e) {
      console.log({ error: e });
    }
  }
);
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAllPosts.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [fetchAllPosts.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export default postSlice.reducer;