import React, { useState } from "react";
import Router from "next/router";
import { AuthenticationService } from "../../services";

import LoginLayout from "./LoginLayout";
import { LoginDataType } from "./validation";

const Login = () => {
  const [serverValidationError, setServerValidationError] = useState("");

  const startLogin = async (values: LoginDataType) => {
    setServerValidationError("");
    try {
      const res = await AuthenticationService.loginUser(values);
      if (res.error === "USER_NOT_FOUND") {
        return setServerValidationError("Toks vartotojas nerastas");
      } else if (res.error === "INVALID_PASSWORD") {
        return setServerValidationError("Slaptazodis netinka");
      }

      Router.replace("/recipes");
    } catch (responseError) {
      //
    }
  };

  return (
    <LoginLayout
      handleLoginFormSubmit={startLogin}
      serverValidationError={serverValidationError}
    />
  );
};

export default Login;
