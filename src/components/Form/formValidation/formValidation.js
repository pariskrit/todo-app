export const nameValidation = (values) => {
  let error = {};

  if (!values.name) {
    error.name = "name is required";
    error.validate = false;
  } else {
    error.name = "";
    error.validate = true;
  }

  return error;
};

export const emailValidation = (values) => {
  let error = {};

  if (!values.email) {
    error.email = "email is required";
    error.validate = false;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    error.email = "email is Invalid";
    error.validate = false;
  } else {
    error.email = "";
    error.validate = true;
  }

  return error;
};

export const passwordValidation = (values) => {
  let error = {};

  if (!values.password) {
    error.password = "password is required";
    error.validate = false;
  } else if (values.password.length < 8) {
    error.password = "password must be greator than 8 letters";
    error.validate = false;
  } else {
    error.password = "";
    error.validate = true;
  }

  return error;
};

export const formValidate = (values) => {
  let val = false;

  if (
    values.name.validate &&
    values.email.validate &&
    values.password.validate
  ) {
    val = true;
  }

  return val;
};
