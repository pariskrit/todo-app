import React, { useState } from "react";
import Login from "./LoginForm/LoginForm";
import Register from "./RegisterForm/RegisterForm";
import "./form.css";

function Form() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="form">
      {toggle ? <Login /> : <Register />}
      <div className="form__button">
        <button type="button" onClick={() => setToggle((prev) => !prev)}>
          {toggle ? "register" : "login"}
        </button>
      </div>
    </div>
  );
}

export default Form;
