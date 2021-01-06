import React, { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Colors } from "../../constants";

interface inputInterface extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: {};
  multiline?: boolean;
}

const Input: React.FC<inputInterface> = ({
  label,
  error,
  multiline,
  ...inputProps
}) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      {multiline ? (
        <InputMultiline rows={4} error={error} {...inputProps} />
      ) : (
        <InputLine autoComplete="off" error={error} {...inputProps} />
      )}
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
};

export default React.memo(Input);

export const InputStyle = css`
  padding: 1rem;
  border: 1px solid;
  border-color: ${(props) => (props.error ? Colors.errorsRed : Colors.Border)};
`;
const InputContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.h5`
  font-weight: bolder;
  padding: 0 1rem;
`;

const Error = styled.h5`
  font-weight: bolder;
  padding: 0 1rem;
  color: ${Colors.errorsRed};
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
