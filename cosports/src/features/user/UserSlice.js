import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  userDetail: null,
  token: null,
  status: "idle",
};

export const fetchUserLogin = createAsyncThunk(
  "user/fetchUser",
  async (username, password) => {
    try {
      const response = await axios.post("http://localhost:3003/singleuser", {
        username,
        password,
      });

      return response.data;
    } catch (e) {
      console.log({ e });
    }
  }
);
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // loginDetailsEntered: (state, action) => {
    // },
  },
});
// set initial state
// set combineReducers
// set thunk
// set extra reducers
