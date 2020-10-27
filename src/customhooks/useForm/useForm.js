import { useState, useEffect } from "react";
import validate from "../../components/Form/formValidation/formValidation";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState({});

  const handleChange = (event) => {
    event.preventDefault();
    setError(validate({ [event.target.name]: event.target.value }));
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return { values, handleChange, error };
};

export default useForm;
