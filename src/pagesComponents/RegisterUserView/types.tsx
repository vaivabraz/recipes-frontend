export type RegistrationDataType = {
  email: string;
  password1: string;
  password2: string;
};

export type RegistrationErrorsType = {
  email?: string;
  password1?: string;
  password2?: string;
};
