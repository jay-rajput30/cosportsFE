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
    const response = await axios.post("http://localhost:3003/user/singleuser", {
      username,
      password,
    });

    return response.data;
  }
);

export const editUserBio = createAsyncThunk(
  "user/editBio",
  async ({ newBio, token }) => {
    const response = await axios.post(
      "http://localhost:3003/account/updatebio",
      {
        newBio,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  }
);
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.status = "idle";
      state.userDetail = null;
      state.token = null;
      localStorage.removeItem("userToken");
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: {
    [fetchUserLogin.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUserLogin.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.userDetail = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("userToken", JSON.stringify(state.token));
    },
    [fetchUserLogin.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload.err.message;
    },
    [editUserBio.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload.err.message;
    },
    [editUserBio.fulfilled]: (state, action) => {
      console.log({ bioAction: action.payload });
      state.status = "fulfilled";
      state.userDetail.userAccountDetails = action.payload.userAccount;
    },
  },
});
// set initial state
// set combineReducers
// set thunk
// set extra reducers

export const { logoutUser, updateToken } = UserSlice.actions;
export default UserSlice.reducer;
