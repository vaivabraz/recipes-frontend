import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Formik, Form } from "formik";
import { Typography, TextField, Button, Link as MuiLink } from "@mui/material";

import { Row, Page, Column, VSpace, LoadingOverlay } from "../../ui";
import { validateRegistrationData } from "./validateRegistrationData";
import { RegistrationDataType } from "./types";

const RegisterUserView = ({
  handleRegisterUserFormSubmit,
  serverValidationError,
}) => {
  const initialData: RegistrationDataType = {
    email: "",
    password1: "",
    password2: "",
  };

  return (
    <Page>
      <VSpace height={2} />
      <Typography variant="h2" textAlign="center">
        Susikurk savo asmeninę receptų knygą
      </Typography>
      <VSpace height={3} />

      <Formik
        initialValues={initialData}
        validateOnChange={false}
        validate={validateRegistrationData}
        onSubmit={handleRegisterUserFormSubmit}
      >
        {(formik) => (
          <StyledForm>
            {formik.isSubmitting && <LoadingOverlay />}
            <TextField
              id="email"
              name="email"
              label="Elektroninis paštas"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              helperText={
                (formik.touched.email && formik.errors.email) ||
                serverValidationError
              }
              error={
                (formik.touched.email && Boolean(formik.errors.email)) ||
                serverValidationError
              }
            />
            <VSpace />
            <TextField
              id="password1"
              name="password1"
              label="Slaptažodis"
              type="password"
              fullWidth
              value={formik.values.password1}
              onChange={formik.handleChange}
              error={Boolean(
                formik.touched.password1 && formik.errors.password1
              )}
              helperText={formik.touched.password1 && formik.errors.password1}
            />
            <VSpace />

            <TextField
              id="password2"
              name="password2"
              label="Pakartoti slaptažodį"
              type="password"
              fullWidth
              value={formik.values.password2}
              onChange={formik.handleChange}
              error={Boolean(
                formik.touched.password2 && formik.errors.password2
              )}
              helperText={formik.touched.password2 && formik.errors.password2}
            />
            <VSpace height={2} />
            <Button variant="contained" type="submit">
              Registruotis
            </Button>
          </StyledForm>
        )}
      </Formik>
      <VSpace height={2} />
      <Typography variant="subtitle1">jau turi paskyrą?</Typography>
      <VSpace />
      <Link href="/login" passHref>
        <MuiLink underline="none">Eiti į prisijungimo puslapį</MuiLink>
      </Link>
      <VSpace />
    </Page>
  );
};

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
`;

export default RegisterUserView;
