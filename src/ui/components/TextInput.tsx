import React from "react";
import styled, { css } from "styled-components";
import { useField, FieldInputProps } from "formik";
import { Text } from "../../ui";

interface inputInterface extends FieldInputProps<""> {
  label?: string;
  multiline?: boolean;
  containerStyle?: object;
}

const TextInput: React.FC<inputInterface> = ({
  label,
  multiline,
  containerStyle,
  ...inputProps
}) => {
  const [field, meta] = useField(inputProps);
  const className = meta.error ? "error" : "";
  return (
    <>
      {label && <Text type="h5">{label}</Text>}
      {multiline ? (
        <InputMultiline
          rows={4}
          className={className}
          {...field}
          {...inputProps}
        />
      ) : (
        <InputLine
          autoComplete="off"
          className={className}
          {...field}
          {...inputProps}
        />
      )}
      {meta.touched && meta.error && <Text color="error">{meta.error}</Text>}
    </>
  );
};

export default React.memo(TextInput);

export const InputStyle = css`
  padding: 0.5rem;
  border: 1px solid;
  border-color: var(--BorderColor);
  &.error {
    border-color: var(--errorsRed);
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--DarkGrey);
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--DarkGrey);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--DarkGrey);
  }
  &:focus,
  &:hover {
    outline: none;
    box-shadow: var(--Shadow);
  }
`;

const InputLine = styled.input`
  ${InputStyle}
  display: flex;
  flex: 1;
`;
const InputMultiline = styled.textarea`
  ${InputStyle}
  display: flex;
  flex: 1;
  resize: none;
`;
