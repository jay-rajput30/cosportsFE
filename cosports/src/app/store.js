import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/UserSlice";
import postReducer from "../features/post/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    posts: postReducer,
  },
});
