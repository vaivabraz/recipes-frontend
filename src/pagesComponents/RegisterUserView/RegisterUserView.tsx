import React from "react";
import styled from "styled-components";
import useForm from "../../utils/useForm";
import { RegistrationService } from "../../services";

import {
  Row,
  Column,
  Text,
  Button,
  InputStyle,
  TextButton,
  VSpace,
} from "../../ui";
import Router from "next/router";

const RegisterUserView = () => {
  const initialData = {
    username: "",
    password: "",
    password2: "",
  };
  const [values, setFormValue] = useForm(initialData);

  const registerUser = () => {
    // RegistrationService.registerUser(values);
    // history.push("/");
  };
  //TODO1: add validations
  return (
    <ScreenContainer>
      <Container>
        <Text text="Susikurk savo asmeninę receptų knygą" type="h2" />
        <VSpace height={5} />
        <StyledInput
          placeholder="elektroninis paštas"
          label="Prisijungimo vardas"
          name="username"
          value={values.username}
          onChange={setFormValue}
        />
        <VSpace />
        <StyledInput
          placeholder="slaptažodis"
          label="Slaptazodis"
          type="password"
          name="password"
          value={values.password}
          onChange={setFormValue}
        />
        <VSpace />
        <StyledInput
          placeholder="pakartoti slaptažodį"
          label="Pakartoti slaptazodi"
          type="password"
          name="password2"
          value={values.password2}
          onChange={setFormValue}
        />
        <VSpace height={2} />
        <Button onClick={registerUser}>Registruotis</Button>
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
