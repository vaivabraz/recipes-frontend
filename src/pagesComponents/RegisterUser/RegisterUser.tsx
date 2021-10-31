import { useState } from "react";
import Router from "next/router";
import { AuthenticationService, RegistrationService } from "../../services";
import RegisterUserView from "./RegisterUserView";

const RegisterUser = () => {
  const [serverValidationError, setServerValidationError] = useState("");

  const registerUser = async (values) => {
    setServerValidationError("");
    const result = await RegistrationService.registerUser({
      email: values.email,
      password: values.password1,
    });
    if (result.error === "EMAIL_ALREADY_USED") {
      setServerValidationError("Toks vartotojas jau egzistuoja");
      return;
    }
    if (result.username) {
      await AuthenticationService.loginUser({
        email: values.email,
        password: values.password1,
      });
      Router.replace("/recipes");
    }
  };

  return (
    <RegisterUserView
      handleRegisterUserFormSubmit={registerUser}
      serverValidationError={serverValidationError}
    />
  );
};
export default RegisterUser;
