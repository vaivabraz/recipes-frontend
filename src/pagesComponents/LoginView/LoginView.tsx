import React from "react";
import styled from "styled-components";
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
} from "../../ui";

const LoginView = () => {
  const initialData = {
    username: "",
    password: "",
  };
  const [values, setFormValue] = useForm(initialData);

  return (
    <ScreenContainer>
      <Container>
        <Text text="Tavo asmeninė receptų knyga!" type="h2" />
        <VSpace height={5} />
        <StyledInput
          placeholder="elektroninis paštas"
          name="username"
          value={values.username}
          onChange={setFormValue}
        />
        <VSpace />
        <StyledInput
          placeholder="slaptažodis"
          type="password"
          name="password"
          value={values.password}
          onChange={setFormValue}
        />
        <VSpace height={2} />
        <Button onClick={() => AuthenticationService.loginUser(values)}>
          Prisijungti
        </Button>
        <VSpace height={3} />
        <Text text="arba" />
        <TextButton text={"Sukurti naują vartotoją"} onClick={() => {}} />
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
