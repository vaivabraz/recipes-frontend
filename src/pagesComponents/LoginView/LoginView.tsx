import React, { useState } from "react";
import styled from "styled-components";
import Router from "next/router";
import useForm from "../../utils/useForm";
import { AuthenticationService } from "../../services";

import {
  Row,
  Column,
  Text,
  Button,
  TextButton,
  VSpace,
  InputStyle,
  ErrorText,
} from "../../ui";

const LoginView = () => {
  const initialData = {
    email: "",
    password: "",
  };

  const [values, setFormValue] = useForm(initialData);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const startLogin = async () => {
    setErrorEmail("");
    setErrorPassword("");
    const { accessToken, error } = await AuthenticationService.loginUser(
      values
    );

    if (error) {
      if (error === "USER_NOT_FOUND") {
        setErrorEmail("Toks vartotojas nerastas");
      } else if (error === "INVALID_PASSWORD") {
        setErrorPassword("Slaptazodis netinka");
      }
      return;
    }
    Router.replace("/recipes");
  };

  return (
    <ScreenContainer>
      <Container>
        <Text text="Tavo asmeninė receptų knyga!" type="h2" />
        <VSpace height={5} />
        <StyledInput
          placeholder="elektroninis paštas"
          name="email"
          value={values.email}
          onChange={setFormValue}
          error={errorEmail}
        />
        <ErrorText error={errorEmail} />
        <VSpace />
        <StyledInput
          placeholder="slaptažodis"
          type="password"
          name="password"
          value={values.password}
          onChange={setFormValue}
          error={errorPassword}
        />
        <ErrorText error={errorPassword} />
        <VSpace height={2} />
        <Button onClick={startLogin}>Prisijungti</Button>
        <VSpace height={3} />
        <Text text="arba" />
        <TextButton
          text={"Sukurti naują vartotoją"}
          onClick={() => Router.push("/register")}
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

export default LoginView;
