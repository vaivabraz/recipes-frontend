import React, { useState } from "react";
import Router from "next/router";
import { AuthenticationService } from "../../services";

import LoginView from "./LoginView";
import { LoginDataType } from "./validation";

const Login = () => {
  const [serverValidationError, setServerValidationError] = useState("");

  const startLogin = async (values: LoginDataType) => {
    setServerValidationError("");
    try {
      await AuthenticationService.loginUser(values);
      Router.replace("/recipes");
    } catch (responseError) {
      const errorCode = responseError.data.errorCode;
      if (errorCode === "USER_NOT_FOUND") {
        setServerValidationError("Toks vartotojas nerastas");
      } else if (errorCode === "INVALID_PASSWORD") {
        setServerValidationError("Slaptazodis netinka");
      }
      return;
    }
  };

  const navigateToRegisterNewUser = () => Router.push("/register");

  return (
    <LoginView
      handleLoginFormSubmit={startLogin}
      handleNavigateToCreateNewUser={navigateToRegisterNewUser}
      serverValidationError={serverValidationError}
    />
  );
};

export default Login;
