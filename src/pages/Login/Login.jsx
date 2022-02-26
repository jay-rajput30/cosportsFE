import { fetchAllPosts } from "features/post/postSlice";
import { fetchUserLogin } from "features/user/UserSlice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDetail, token, status, error } = useSelector(
    (state) => state.user
  );

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const loginClickHandler = () => {
    dispatch(fetchUserLogin(login));
    console.log({ status });
  };
  useEffect(() => {
    if (status === "fulfilled") {
      navigate("/feeds");
      dispatch(fetchAllPosts(token));
    }
  }, [status]);
  return (
    <div className="login--container">
      <p className="hero--text">cosports</p>
      <form className="login--form" onSubmit={(e) => e.preventDefault()}>
        <div className="form--item">
          <label htmlFor="username">username</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={(e) => inputChangeHandler(e)}
          />
        </div>
        <div className="form--item">
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={(e) => inputChangeHandler(e)}
          />
        </div>
        <button className="form--submit--btn" onClick={loginClickHandler}>
          login
        </button>
        <p>
          Haven't signed up yet? <Link to="/signup">sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
