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

export const updateLikes = createAsyncThunk(
  "posts/updateLikes",
  async ({ token, postId }) => {
    console.log({ token, postId });
    try {
      const response = await axios.post(
        "http://localhost:3003/post/likepost",
        { postId },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return response.data.post;
    } catch (e) {
      console.log({ error: e });
    }
  }
);
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    incrementLikes: (state, action) => {
      const postFound = state.posts.findIndex(
        (item) => item._id === action.payload._id
      );
      const likesObj = state.posts[postFound].likes;

      const alreadyLiked = likesObj.find(
        (item) => item === action.payload.uid._id
      );
      // console.log({ alreadyLiked, likesObj });
      alreadyLiked
        ? likesObj.filter((item) => item !== action.payload.uid._id)
        : likesObj.push(action.payload.uid._id);

      // console.log({ postFound, payload: action.payload });
    },
  },
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
    [updateLikes.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updateLikes.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      const postIndex = state.posts.findIndex(
        (item) => item._id === action.payload._id
      );
      state.posts[postIndex] = action.payload;
    },
  },
});

export const { incrementLikes } = postSlice.actions;

export default postSlice.reducer;
