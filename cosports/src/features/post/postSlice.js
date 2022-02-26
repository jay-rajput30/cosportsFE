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
    const response = await axios.get(`https://cosportsapi.herokuapp.com/post`, {
      headers: {
        Authorization: token,
      },
    });

    return response.data.posts;
  }
);

export const updateLikes = createAsyncThunk(
  "posts/updateLikes",
  async ({ token, postId }) => {
    const response = await axios.post(
      "https://cosportsapi.herokuapp.com/post/likepost",
      { postId },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data.post;
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ postData, token }) => {
    const response = await axios.post(
      "https://cosportsapi.herokuapp.com/post",
      { content: postData },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data.post;
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
      console.log({ postFound, likesObj });
      const alreadyLiked = likesObj.find(
        (item) => item === action.payload.uid._id
      );

      alreadyLiked
        ? likesObj.filter((item) => item !== action.payload.uid._id)
        : likesObj.push(action.payload.uid._id);
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
    [createPost.fulfilled]: (state, action) => {
      console.log({ payload: action.payload, state });
      state.status = "fulfilled";
      state.posts.unshift(action.payload);
    },
    [createPost.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export const { incrementLikes } = postSlice.actions;

export default postSlice.reducer;
