import React from "react";
import "./register.css";

class RegisterForm extends React.Component {
  render() {
    return (
      <div className="register">
        <h2>Register</h2>
        <form>
          <div>
            <label>Name:</label>
            <br />
            <input type="text" />
          </div>
          <div>
            <label>Email:</label>
            <br />
            <input type="text" />
          </div>
          <div>
            <label>password:</label>
            <br />
            <input type="password" />
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
