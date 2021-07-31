export type LoginDataType = {
  email: string;
  password: string;
};

export const validate = (values) => {
  const errors = {} as LoginDataType;

  if (!values.email) {
    errors.email = "Laukelis turi būti užpildytas!";
  }
  if (!values.password) {
    errors.password = "Laukelis turi būti užpildytas!";
  }

  return errors;
};
