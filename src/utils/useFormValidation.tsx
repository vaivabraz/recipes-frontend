import { useState } from "react";

function useFormValidation<StateType = {}, ErrorsType = {}>(
  initialState: StateType,
  validate: (values: StateType) => ErrorsType,
  submitFormAfterValidation: (values: StateType) => void
) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Partial<ErrorsType>>({});

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
