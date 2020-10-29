import React from "react";
import useForm from "../../../customhooks/useForm/useForm";
import "./loginform.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/actionCreators";
import { Button } from "react-bootstrap";

function LoginForm(props) {
  const { values, handleChange } = useForm({
    name: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    props.loginUser(values);
  };
  return (
    <div className="loginform">
      <h2>LogIn Form</h2>
      <form onSubmit={login}>
        <div className="login__field">
          <b>Name:</b>
          <br />
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="login__input"
          />
        </div>

        <div className="login__field">
          <b>password:</b>
          <br />
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="login__input"
          />
        </div>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(actionCreators.loginUserAsync(user)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
