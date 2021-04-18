import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { Text } from "../../ui";

interface buttonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const TextButton: React.FC<buttonInterface> = ({ text, ...buttonProps }) => {
  return (
    <ButtonBox {...buttonProps}>
      <Text color="accent" type="button">
        {text}
      </Text>
    </ButtonBox>
  );
};

export default TextButton;

const ButtonBox = styled.button`
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  background-color: var(--Background);
  padding-top: 2px;
`;
