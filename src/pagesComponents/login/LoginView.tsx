import React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";

import {
  Row,
  Column,
  Text,
  Button,
  TextButton,
  VSpace,
  ErrorText,
  TextInput,
  LoadingOverlay,
} from "../../ui";
import { LoginDataType, validate } from "./validation";

const LoginView = ({
  handleLoginFormSubmit,
  handleNavigateToCreateNewUser,
  serverValidationError,
}) => {
  const initialData: LoginDataType = {
    email: "",
    password: "",
  };

  return (
    <ScreenContainer>
      <Container>
        <Text text="Tavo asmeninė receptų knyga!" type="h2" />
        <VSpace height={5} />
        <Formik
          initialValues={initialData}
          validateOnChange={false}
          validate={validate}
          onSubmit={handleLoginFormSubmit}
        >
          {(formik) => (
            <StyledForm>
              {formik.isSubmitting && <LoadingOverlay />}
              <StyledInput name="email" placeholder="elektroninis paštas" />
              <VSpace />
              <StyledInput
                name="password"
                type="password"
                placeholder="slaptažodis"
              />
              <VSpace height={2} />
              <ErrorText error={serverValidationError} />
              <Button type="submit">Prisijungti</Button>
            </StyledForm>
          )}
        </Formik>
        <VSpace height={3} />
        <Text text="arba" />
        <TextButton
          text={"Sukurti naują vartotoją"}
          onClick={handleNavigateToCreateNewUser}
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

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(TextInput)`
  width: 20rem;
  text-align: center;
`;

export default LoginView;
