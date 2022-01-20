import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ path, ...props }) => {
  const userLoggedIn = useSelector((state) => state.user);
  const { status } = userLoggedIn;
  return status === "fulfilled" ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};

export default PrivateRoute;
