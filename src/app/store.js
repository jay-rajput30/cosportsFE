import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice";
import postReducer from "../features/post/postSlice";
import commentReducer from "../features/comment/commentSlice";
import usersReducer from "../features/users/UsersSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    comments: commentReducer,
    users: usersReducer,
  },
});
