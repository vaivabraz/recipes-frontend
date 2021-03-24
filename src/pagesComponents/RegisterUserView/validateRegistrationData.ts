import { registrationDataType, registrationErrorsType } from "./types";

export function validateRegistrationData(values: registrationDataType) {
  const errors = {} as registrationErrorsType;

  const emailValidationRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordValidationRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!emailValidationRegex.test(values.email)) {
    errors.email = "Netinkamas elektroninio pašto adresass";
  }

  if (!passwordValidationRegex.test(values.password1)) {
    errors.password1 =
      "Slaptažodis turi:\n - Būti bent 8 simbolių ilgio;\n - Turėti bent po vieną raidę ir skaitmenį";
  } else if (values.password1 !== values.password2) {
    errors.password2 = "Ivesti slaptazodziai nesutampa!";
  }

  return errors;
}
