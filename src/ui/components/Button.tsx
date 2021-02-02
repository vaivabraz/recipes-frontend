import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { Colors } from "../../constants";

interface buttonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<buttonInterface> = ({ text, ...buttonProps }) => {
  return (
    <ButtonBox {...buttonProps}>
      <Text>{text}</Text>
    </ButtonBox>
  );
};

export default Button;

const ButtonBox = styled.button`
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 6rem;
  border: 1px ${Colors.Border} solid;
  background-color: ${Colors.Background};
  &:hover {
    border: 1px ${Colors.BorderDarker} solid;
  }
`;

const Text = styled.p`
  padding: 0.5rem;
  ${ButtonBox}:hover & {
    color: ${Colors.AccentColor};
    font-weight: bolder;
  }
`;
