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
    const response = await axios.get(
      `https://cosportsapi.herokuapp.com/comment`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return response.data.comments;
  }
);

export const addComment = createAsyncThunk(
  "comments/addComment",
  async ({ postData, token }) => {
    const response = await axios.post(
      `https://cosportsapi.herokuapp.com/comment/addcomment`,
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

export const updateCommentLikes = createAsyncThunk(
  "comment/likecomment",
  async ({ token, commentId }) => {
    const response = await axios.post(
      `https://cosportsapi.herokuapp.com/comment/likecomment`,
      { commentId },
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
  reducers: {
    incrementCommentLikes: (state, action) => {
      const postFound = state.comments.findIndex(
        (item) => item._id === action.payload._id
      );
      const likesObj = state.comments[postFound].likes;
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
    [updateCommentLikes.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updateCommentLikes.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      const commentIndex = state.comments.findIndex(
        (item) => item._id === action.payload._id
      );
      state.comments[commentIndex] = action.payload;
    },
  },
});

export const { incrementCommentLikes } = commentSlice.actions;

export default commentSlice.reducer;
