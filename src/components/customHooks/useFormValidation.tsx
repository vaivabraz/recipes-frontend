import { useEffect, useState } from "react";

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
  const [isSubmitting, setSubmitting] = useState(false);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        submitFormAfterValidation(values);
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  function handleBlur() {
    //TODO: validate only current input?
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  };
}

export default useFormValidation;
