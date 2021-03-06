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
    const response = await axios.post(
      `https://cosportsapi.herokuapp.com/user/singleuser`,
      {
        username,
        password,
      }
    );

    return response.data;
  }
);
export const getUser = createAsyncThunk("user/getUser", async (token) => {
  const response = await axios.get(
    `https://cosportsapi.herokuapp.com/user/singleuser`,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  return response.data;
});

export const editUserBio = createAsyncThunk(
  "user/editBio",
  async ({ updatedUserDetails, token }) => {
    const response = await axios.post(
      `https://cosportsapi.herokuapp.com/account/updatedetail`,
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
      `https://cosportsapi.herokuapp.com/account/followuser`,
      { accountToFollowId },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  }
);

export const signupUser = createAsyncThunk(
  "user/signupuser",
  async (formData) => {
    const response = await axios.post(
      `https://cosportsapi.herokuapp.com/user`,
      {
        formData,
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
    updateUser: (state, action) => {
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
      state.userDetail.userAccountDetails.followers =
        action.payload.user.followers;
    },
    [getUser.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.userDetail = action.payload.user;
    },
    [getUser.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload.err.message;
    },
    [getUser.loading]: (state, action) => {
      state.status = "loading";
    },
    [signupUser.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload.err.message;
    },
    [signupUser.fulfilled]: (state, action) => {
      state.userDetail = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("userToken", JSON.stringify(state.token));
    },
  },
});

export const { logoutUser, updateToken, updateUser } = UserSlice.actions;
export default UserSlice.reducer;
