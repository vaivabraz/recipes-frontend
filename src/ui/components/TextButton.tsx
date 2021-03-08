import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { Colors } from "../../constants";
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
  background-color: ${Colors.Background};
  padding-top: 2px;
`;
