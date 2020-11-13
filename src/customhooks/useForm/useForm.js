import { useState, useEffect } from "react";
import * as validate from "../../components/Form/formValidation/formValidation";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState({
    name: { name: "", validate: false },
    email: { email: "", validate: false },
    password: { password: "", validate: false },
  });
  const [formValidate, setFormValidate] = useState(false);

  useEffect(() => {
    setFormValidate(validate.formValidate({ ...error }));
  }, [error]);

  const handleChange = (event) => {
    event.preventDefault();

    if (event.target.name === "name") {
      setError({
        ...error,
        name: validate.nameValidation({
          ...values,
          [event.target.name]: event.target.value,
        }),
      });
    }

    if (event.target.name === "email") {
      setError({
        ...error,

        email: validate.emailValidation({
          ...values,
          [event.target.name]: event.target.value,
        }),
      });
    }

    if (event.target.name === "password") {
      setError({
        ...error,

        password: validate.passwordValidation({
          ...values,
          [event.target.name]: event.target.value,
        }),
      });
    }

    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return { values, handleChange, error, formValidate };
};

export default useForm;
