import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  userDetail: null,
  token: null,
  status: "idle",
  error: null,
};

export const fetchUserLogin = createAsyncThunk(
  "user/fetchUser",
  async ({ username, password }) => {
    try {
      const response = await axios.post(
        "http://localhost:3003/user/singleuser",
        {
          username,
          password,
        }
      );

      return response.data;
    } catch (e) {
      console.log({ e });
    }
  }
);
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // loginDetailsEntered: (state, action) => {
    // },
  },
  extraReducers: {
    [fetchUserLogin.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUserLogin.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.userDetail = action.payload.user;
      state.token = action.payload.token;
    },
    [fetchUserLogin.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload.err.message;
    },
  },
});
// set initial state
// set combineReducers
// set thunk
// set extra reducers

export default UserSlice.reducer;
