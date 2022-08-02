import React from "react";
import { Formik, Form } from "formik";
import {
  Typography,
  TextField,
  Button,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";

import { VSpace, ErrorText, LoadingOverlay, Page } from "../../ui";
import { LoginDataType, validate } from "./validation";
import { DemoUserInfo } from "./DemoUserInfo";
import styles from './login.module.scss';

type LoginViewType = {
  handleLoginFormSubmit: (values: LoginDataType) => Promise<void>;
  serverValidationError: string;
};

const LoginView: React.FC<LoginViewType> = ({
  handleLoginFormSubmit,
  serverValidationError,
}) => {
  const initialData: LoginDataType = {
    email: "",
    password: "",
  };

  return (
    <Page>
      <VSpace height={5} />
      <Typography variant="h2" textAlign="center">
        Tavo asmeninė receptų knyga!
      </Typography>
      <VSpace height={3} />
      <Formik
        initialValues={initialData}
        validateOnChange={false}
        validate={validate}
        onSubmit={handleLoginFormSubmit}
      >
        {(formik) => (
          <Form className={styles.form}>
            {formik.isSubmitting && <LoadingOverlay />}
            <DemoUserInfo/>
            <TextField
              id="email"
              name="email"
              label="Elektroninis paštas"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <VSpace />
            <TextField
              id="password"
              name="password"
              label="Slaptažodis"
              type="password"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <VSpace height={2} />
            <ErrorText error={serverValidationError} />
            <Button variant="contained" type="submit">
              Prisijungti
            </Button>
          </Form>
        )}
      </Formik>
      <VSpace height={2} />
      <Typography variant="subtitle1">arba</Typography>
      <VSpace />
      <Link href="/register" passHref>
        <MuiLink underline="none">Sukurti naują vartotoją</MuiLink>
      </Link>
      <VSpace />
    </Page>
  );
};

export default LoginView;
