import { useState } from "react";

type valuesType = {
  [key: string]: any;
};

function useFormValidation(
  initialState: valuesType,
  validate: (values: valuesType) => {},
  submitFormAfterValidation: (values: valuesType) => void
) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<valuesType>({});

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleCustomChange(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleBlur() {
    const hasErrors = Object.keys(errors).length !== 0;
    if (hasErrors) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      submitFormAfterValidation(values);
    }
  }

  return {
    handleSubmit,
    handleChange,
    handleCustomChange,
    handleBlur,
    values,
    errors,
  };
}

export default useFormValidation;
