import React, { useEffect } from "react";
import useForm from "../../../customhooks/useForm/useForm";
import "./loginform.css";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";

export function LoginForm(props) {
  const { values, handleChange } = useForm({
    name: "",
    password: "",
  });

  const history = useHistory();

  useEffect(() => {
    console.log("loginform rendered");
  }, []);

  const login = (e) => {
    e.preventDefault();
    props.loginUser(values, history);
  };
  return (
    <div className="loginform">
      <h2>LogIn </h2>
      {props.isLoading ? (
        <Spinner animation="border" style={{ margin: "80px 200px" }} />
      ) : (
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
          {props.isError ? (
            <Alert variant="danger">
              The username or password is incorrect! Please try again
            </Alert>
          ) : null}
          <Button variant="primary" type="submit">
            Login
          </Button>
        </form>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.users.isLoading,
    isError: state.users.isError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user, history) =>
      dispatch(actionCreators.loginUserAsync(user, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
