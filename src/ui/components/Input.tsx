import React, { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Colors } from "../../constants";
import { Text } from "../../ui";

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
      {label && <Text type="h5">{label}</Text>}
      {multiline ? (
        <InputMultiline rows={4} error={error} {...inputProps} />
      ) : (
        <InputLine autoComplete="off" error={error} {...inputProps} />
      )}
      {error && <Text color="error">{error}</Text>}
    </InputContainer>
  );
};

export default React.memo(Input);

export const InputStyle = css`
  padding: 0.5rem;
  border: 1px solid;
  border-color: ${(props) => (props.error ? Colors.errorsRed : Colors.Border)};
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${Colors.DarkGrey};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${Colors.DarkGrey};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${Colors.DarkGrey};
  }
  &:focus,
  &:hover {
    outline: none;
    box-shadow: 0 0.4rem 0.375rem -0.375rem ${Colors.ShadowNude};
  }
`;

const InputContainer = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
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
