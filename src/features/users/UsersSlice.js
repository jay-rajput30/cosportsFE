import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
  searchedAccounts: [],
  status: "idle",
  error: null,
  token: null,
};

export const getAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (token) => {
    const response = await axios.get(`https://cosportsapi.herokuapp.com/user`, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  }
);

export const getAccountDetail = createAsyncThunk(
  "users/getAccount",
  async ({ searchTerm, token }) => {
    const response = await axios.post(
      `https://cosportsapi.herokuapp.com/account/accountdetail`,
      { searchTerm },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  }
);
export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    findUsername: (state, action) => {},
  },
  extraReducers: {
    [getAllUsers.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.users = action.payload.users;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload.err.message;
    },
    [getAccountDetail.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.searchedAccounts = action.payload.accounts;
    },
    [getAccountDetail.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload.e.message;
    },
  },
});

export default UsersSlice.reducer;
