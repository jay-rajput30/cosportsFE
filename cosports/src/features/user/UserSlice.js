const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  userDetail: null,
  token: null,
  status: "idle",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
// set initial state
// set combineReducers
// set thunk
// set extra reducers
