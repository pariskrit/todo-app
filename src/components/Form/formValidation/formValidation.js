import { useState } from "react";

const formValidation = (values) => {
  let error = {};

  if (!values.name) {
    error.name = "name is required";
  }
  if (!/\S+@\S+\.\S+/.test(values.email) && values.email) {
    error.email = "email is Invalid";
  }

  return error;
};

export default formValidation;
