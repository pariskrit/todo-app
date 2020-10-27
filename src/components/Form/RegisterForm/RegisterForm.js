import React from "react";
import "./register.css";
import useForm from "../../../customhooks/useForm/useForm";
import { Button } from "react-bootstrap";

const RegisterForm = () => {
  const { values, handleChange, error } = useForm({
    name: "",
    email: "",
    password: "",
  });

  function register(e) {
    e.preventDefault();
    console.log(values);
  }

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={register}>
        <div className="register__field">
          <b>Name:</b>
          <br />
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className={`register__input ${error.name && "error"}`}
          />
          <p className="register__error">{error.name}</p>
        </div>

        <div className="register__field">
          <b>Email:</b>
          <br />
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={`register__input ${error.email && "error"}`}
          />
          <p className="register__error">{error.email}</p>
        </div>
        <div className="register__field">
          <b>password:</b>
          <br />
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="register__input"
          />
        </div>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
