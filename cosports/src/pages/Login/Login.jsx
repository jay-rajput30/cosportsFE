import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="login--container">
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
        <button className="form--submit--btn">login</button>
      </form>
    </div>
  );
};

export default Login;
