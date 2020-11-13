import React, { useEffect } from "react";
import "./register.css";
import useForm from "../../../customhooks/useForm/useForm";
import { Button } from "react-bootstrap";
import * as actionCreators from "../../../store/actions";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { useHistory } from "react-router-dom";

const RegisterForm = (props) => {
  const { values, handleChange, error, formValidate } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const history = useHistory();

  useEffect(() => {
    console.log("registerform rendered");
  }, []);

  function register(e) {
    e.preventDefault();

    props.register(values, history);
  }

  return (
    <div className="register">
      <h2>Register</h2>
      {props.isLoading ? (
        <Spinner animation="border" style={{ margin: "80px 200px" }} />
      ) : (
        <form onSubmit={register}>
          <div className="register__field">
            <b>Name:</b>
            <br />
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              className={`register__input ${error.name.name && "error"}`}
            />
            <p className="register__error">{error.name.name}</p>
          </div>

          <div className="register__field">
            <b>Email:</b>
            <br />
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={`register__input ${error.email.email && "error"}`}
            />
            <p className="register__error">{error.email.email}</p>
          </div>
          <div className="register__field">
            <b>password:</b>
            <br />
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className={`register__input ${
                error.password.password && "error"
              }`}
            />
            <p className="register__error">{error.password.password}</p>
          </div>
          {!formValidate ? (
            <button type="button" className="register__buttondisable">
              register
            </button>
          ) : (
            <Button variant="primary" type="submit">
              Register
            </Button>
          )}
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.users.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (user, history) =>
      dispatch(actionCreators.registerUserAsync(user, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
