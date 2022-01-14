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
    try {
      const response = await axios.get("http://localhost:3003/comment", {
        headers: {
          Authorization: token,
        },
      });

      return response.data.comments;
    } catch (e) {
      console.log({ error: e });
    }
  }
);

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
});

export default commentSlice.reducer;
