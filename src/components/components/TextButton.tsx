import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { Colors } from "../../constants";

interface buttonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const TextButton: React.FC<buttonInterface> = ({ text, ...buttonProps }) => {
  return (
    <ButtonBox {...buttonProps}>
      <Text>{text}</Text>
    </ButtonBox>
  );
};

export default TextButton;

const ButtonBox = styled.button`
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  background-color: ${Colors.Background};
`;

const Text = styled.p`
  font-size: 16px;
  color: ${Colors.AccentColor};
  font-weight: bolder;
`;
