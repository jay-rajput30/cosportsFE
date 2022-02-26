import { signupUser } from "features/user/UserSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.css";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    website: "",
    email: "",
    username: "",
    password: "",
  });

  //   const [password, setPassword] = useState({ firstTry: "", secondTry: "" });

  //   const [error, setError] = useState(false);

  const backBtnClickHandler = () => {
    navigate("/login");
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const createBtnClickHandler = () => {
    console.log(formData);

    // setFormData({ ...formData, password: password.firstTry });
    dispatch(signupUser(formData));
    navigate("/login");
  };

  return (
    <form
      className="sign--up--form--container"
      onSubmit={(e) => e.preventDefault()}
    >
      <h6 className="sign--up--form--header">create account</h6>
      <div className="signup--form--item">
        <label>first name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={(e) => inputChangeHandler(e)}
        />
      </div>
      <div className="signup--form--item">
        <label>last name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={(e) => inputChangeHandler(e)}
        />
      </div>
      <div className="signup--form--item">
        <label htmlFor="location">location</label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={(e) => inputChangeHandler(e)}
        />
      </div>
      <div className="signup--form--item">
        <label htmlFor="website">website</label>
        <input
          type="text"
          name="website"
          id="website"
          onChange={(e) => inputChangeHandler(e)}
        />
      </div>
      <div className="signup--form--item">
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => inputChangeHandler(e)}
        />
      </div>
      <div className="signup--form--item">
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => inputChangeHandler(e)}
        />
      </div>
      <div className="signup--form--item">
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => inputChangeHandler(e)}
          //   onChange={(e) =>
          //     setPassword({ ...password, firstTry: e.target.value })
          //   }
        />
      </div>
      {/* <div className="signup--form--item">
        <label className="confirmPassword--label" htmlFor="confirmPassword">
          confirm password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={(e) =>
            setPassword({ ...password, secondTry: e.target.value })
          }
        />
      </div> */}
      <div className="signup--form--item--button">
        <button className="sign--up--submit" onClick={createBtnClickHandler}>
          create
        </button>
        <button className="sign--up--submit" onClick={backBtnClickHandler}>
          back
        </button>
      </div>
      {/* {error && (
        <span className="password--mismatch">the passwords do not match</span>
      )} */}
    </form>
  );
};

export default SignUpForm;
