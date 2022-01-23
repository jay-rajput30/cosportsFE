import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  error: null,
  status: "idle",
};

export const fetchAllComments = createAsyncThunk(
  "comments/fetchComments",
  async (token) => {
    const response = await axios.get("http://localhost:3003/comment", {
      headers: {
        Authorization: token,
      },
    });

    return response.data.comments;
  }
);

export const addComment = createAsyncThunk(
  "comments/addComment",
  async ({ postData, token }) => {
    const response = await axios.post(
      "http://localhost:3003/comment/addcomment",
      { content: postData.content, postId: postData.postId },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data.comment;
  }
);

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllComments.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAllComments.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.comments = action.payload;
    },
    [fetchAllComments.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [addComment.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [addComment.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.comments.unshift(action.payload);
    },
  },
});

export default commentSlice.reducer;
