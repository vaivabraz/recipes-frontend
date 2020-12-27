import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Colors } from "../../constants";

interface inputInterface extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: {};
}

const Input: React.FC<inputInterface> = ({ label, error, ...inputProps }) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <InputBox autoComplete="off" error={error} {...inputProps} />
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
};

export default React.memo(Input);

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

const InputBox = styled.input`
  display: flex;
  flex: 1;
  padding: 1rem;
  border: 1px solid;
  border-color: ${(props) => (props.error ? Colors.errorsRed : Colors.Border)};
`;
