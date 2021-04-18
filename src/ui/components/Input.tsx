import React, { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Text, Column } from "../../ui";

interface inputInterface extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: {};
  multiline?: boolean;
  containerStyle?: object;
}

const Input: React.FC<inputInterface> = ({
  label,
  error,
  multiline,
  containerStyle,
  ...inputProps
}) => {
  const className = error ? "error" : "";
  return (
    <Column style={containerStyle}>
      {label && <Text type="h5">{label}</Text>}
      {multiline ? (
        <InputMultiline rows={4} className={className} {...inputProps} />
      ) : (
        <InputLine autoComplete="off" className={className} {...inputProps} />
      )}
      {error && <Text color="error">{error}</Text>}
    </Column>
  );
};

export default React.memo(Input);

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
