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
export const getUser = createAsyncThunk("user/getUser", async (token) => {
  const response = await axios.get("http://localhost:3003/user/singleuser", {
    headers: {
      Authorization: token,
    },
  });

  return response.data;
});
export const editUserBio = createAsyncThunk(
  "user/editBio",
  async ({ updatedUserDetails, token }) => {
    const response = await axios.post(
      "http://localhost:3003/account/updatedetail",
      {
        updatedUserDetails,
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

export const followAccount = createAsyncThunk(
  "user/followaccount",
  async ({ accountToFollowId, token }) => {
    const response = await axios.post(
      "http://localhost:3003/account/followuser",
      { accountToFollowId },
      {
        headers: {
          Authorization: token,
        },
      }
    );
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
    updateUser: (state, action) => {
      console.log({
        payload: action.payload.newFullName,
        state: state.userDetail.firstName,
      });
      const [fName, lName] = action.payload.newFullName.trim().split(" ");

      state.userDetail.firstName = fName;
      state.userDetail.lastName = lName === undefined ? "" : lName;
      state.userDetail.userAccountDetails.bio = action.payload.newBio;
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
      state.status = "fulfilled";
      state.userDetail.userAccountDetails = action.payload.userAccount;
    },
    [followAccount.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload.err.message;
    },
    [followAccount.fulfilled]: (state, action) => {
      state.status = "fulfilled";
    },
    [getUser.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.userDetail = action.payload.user;
    },
    [getUser.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload.err.message;
    },
  },
});
// set initial state
// set combineReducers
// set thunk
// set extra reducers

export const { logoutUser, updateToken, updateUser } = UserSlice.actions;
export default UserSlice.reducer;
