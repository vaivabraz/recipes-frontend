import React, { useContext, useState } from "react";
import styled from "styled-components";
import Router from "next/router";
import { AuthenticationService, RegistrationService } from "../../services";
import {
  Row,
  Column,
  Text,
  Button,
  InputStyle,
  TextButton,
  VSpace,
  ErrorText,
} from "../../ui";
import useFormValidation from "../../utils/useFormValidation";
import { validateRegistrationData } from "./validateRegistrationData";
import { RegistrationDataType, RegistrationErrorsType } from "./types";
import { Actions, AppContext } from "../../store";

const RegisterUserView = () => {
  const initialData: RegistrationDataType = {
    email: "",
    password1: "",
    password2: "",
  };

  const { dispatch } = useContext(AppContext);
  const [errorEmail, setErrorEmail] = useState("");

  const registerUser = async () => {
    setErrorEmail("");
    const result = await RegistrationService.registerUser({
      email: values.email,
      password: values.password1,
    });
    if (result.error === "EMAIL_ALREADY_USED") {
      setErrorEmail("Toks vartotojas jau egzistuoja");
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

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
  } = useFormValidation<RegistrationDataType, RegistrationErrorsType>(
    initialData,
    validateRegistrationData,
    registerUser
  );

  return (
    <ScreenContainer>
      <Container>
        <Text text="Susikurk savo asmeninę receptų knygą" type="h2" />
        <VSpace height={5} />
        <StyledInput
          placeholder="elektroninis paštas"
          label="Prisijungimo vardas"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email || errorEmail}
          onBlur={handleBlur}
        />
        <ErrorText error={errors.email || errorEmail} />
        <VSpace />
        <StyledInput
          placeholder="slaptažodis"
          label="Slaptazodis"
          type="password"
          name="password1"
          value={values.password1}
          onChange={handleChange}
          error={errors.password1}
          onBlur={handleBlur}
        />
        <ErrorText error={errors.password1} />
        <VSpace />
        <StyledInput
          placeholder="pakartoti slaptažodį"
          label="Pakartoti slaptazodi"
          type="password"
          name="password2"
          value={values.password2}
          onChange={handleChange}
          error={errors.password2}
        />
        <ErrorText error={errors.password2} />
        <VSpace height={2} />
        <Button onClick={handleSubmit}>Registruotis</Button>
        <VSpace height={3} />
        <Text text="jau turi paskyrą?" />
        <TextButton
          text={"Eiti į prisijungimo puslapį"}
          onClick={() => Router.push("/login")}
        />
      </Container>
    </ScreenContainer>
  );
};

const ScreenContainer = styled(Row)`
  height: 100%;
  display: flex;
  flex: 1;
`;

const Container = styled(Column)`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledInput = styled.input`
  ${InputStyle}
  width: 20rem;
  text-align: center;
`;

export default RegisterUserView;
