import { useState } from "react";

function useForm<StateType = {}>(
  initialState: StateType
): [StateType, (event: any) => void] {
  const [values, setValues] = useState(initialState);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  return [values, handleChange];
}

export default useForm;
