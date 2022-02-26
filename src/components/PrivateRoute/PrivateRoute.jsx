import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateToken } from "features/user/UserSlice";

const PrivateRoute = ({ children }) => {
  const userLoggedIn = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { token } = userLoggedIn;
  const userToken = token
    ? token
    : JSON.parse(localStorage.getItem("userToken"));

  dispatch(updateToken(userToken));
  return userToken ? children : <Navigate replace to="/login" />;
};

export default PrivateRoute;
