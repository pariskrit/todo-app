import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function sucess(props) {
  return (
    <div style={{ marginTop: "50px" }}>
      <Alert show={props.show} variant="success">
        <Alert.Heading>SucessFully Saved!</Alert.Heading>

        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={props.close} variant="outline-success">
            Ok
          </Button>
        </div>
      </Alert>
    </div>
  );
}

export default sucess;
