import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
  status: "idle",
  error: null,
  token: null,
};

export const getAllUsers = createAsyncThunk("users/fetchAllUsers", async () => {
  const response = await axios.get("http:localhost:3003/user/");

  return response.data;
});
export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.users = action.payload.users;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload.err.message;
    },
  },
});

export default UsersSlice.reducer;
